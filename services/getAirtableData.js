require('dotenv').config();

const Airtable = require('airtable');
const request = require('request');
const fs = require('fs');

const map = require('ramda/src/map');
const path = require('ramda/src/path');
const pathOr = require('ramda/src/pathOr');
const propOr = require('ramda/src/propOr');
const props = require('ramda/src/props');

const uploadAsset = require('./uploadAsset');

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_API_URL,
  apiKey: process.env.AIRTABLE_API_KEY
});

function downloadBanner({ id, url }) {
  return new Promise((resolve, reject) => {
    request.get(url, function(err, response, body) {
      if (err) {
        return reject(err);
      }

      if (response.statusCode === 200) {
        return resolve({ file: `${id}_banner.svg`, data: body });
      }
    });
  });
}

function mapTeams(teams) {
  const mappedResult = map(
    currentTeam =>
      new Promise((resolve, reject) => {
        const currentFields = path(['_rawJson', 'fields'], currentTeam);
        const banner = pathOr(
          '/public/images/teams/shirt-placeholder.svg',
          ['images/shirt', '0', 'url'],
          currentFields
        );

        const [name, slug, id] = props(['name', 'slug', 'id'], currentFields);

        const baseThemeColor = propOr('white', 'base-theme-color', currentFields);
        const baseContentColor = propOr('black', 'base-content-color', currentFields);

        setTimeout(() => {
          downloadBanner({ id, url: banner })
            .then(bannerData => {
              resolve({
                name,
                slug,
                id,
                theme: {
                  'base-theme-color': baseThemeColor,
                  'base-content-color': baseContentColor
                },
                asset: bannerData
              });
            })
            .catch(reject);
        }, 600);
      }),
    teams
  );

  return new Promise((resolve, reject) => {
    Promise.all(mappedResult)
      .then(assets => {
        uploadAsset(assets.map(({ asset }) => asset))
          .then(res => {
            resolve(
              assets.map(({ name, slug, id, theme, asset }) => {
                return {
                  name,
                  slug,
                  id,
                  theme,
                  banner: `${process.env.ASSETS_URL}/${asset.file}`
                };
              })
            );
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

const getBrazilTeams = () => {
  return new Promise((resolve, reject) => {
    const teamsJson = `public/mappedTeams.json`;

    fs.readFile(teamsJson, function(err, data) {
      if (err) {
        const base = Airtable.base(process.env.AIRTABLE_TEAMS_BASE_KEY);

        return base('brazil_teams')
          .select({
            view: 'Grid view'
          })
          .firstPage(function(err, records) {
            if (err) {
              return reject(err);
            }

            return mapTeams(records)
              .then(mappedTeams => {
                fs.writeFile(teamsJson, JSON.stringify({ mappedTeams }), 'utf-8', function(err) {
                  if (err) {
                    return reject(err);
                  }

                  resolve(mappedTeams);
                });
              })
              .catch(reject);
          });
      }

      return resolve(JSON.parse(data).mappedTeams);
    });
  });
};

try {
  getBrazilTeams();
} catch (err) {
  console.log(err);
  process.exit(-1);
}
