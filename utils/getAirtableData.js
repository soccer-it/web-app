const Airtable = require("airtable");

const map = require("ramda/src/map");
const path = require("ramda/src/path");
const pathOr = require("ramda/src/pathOr");
const propOr = require("ramda/src/propOr");

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_API_URL,
  apiKey: process.env.AIRTABLE_API_KEY
});

const mapTeams = map(currentTeam => {
  const currentFields = path(["_rawJson", "fields"], currentTeam);
  const banner = pathOr(
    "/static/images/teams/shirt-placeholder.svg",
    ["images/shirt", "0", "url"],
    currentFields
  );

  const baseThemeColor = propOr("white", "base-theme-color", currentFields);
  const baseContentColor = propOr("black", "base-content-color", currentFields);

  return {
    ...currentFields,
    banner,
    theme: {
      "base-theme-color": baseThemeColor,
      "base-content-color": baseContentColor
    }
  };
});

export function getBrazilTeams() {
  return new Promise((resolve, reject) => {
    const base = Airtable.base(process.env.AIRTABLE_TEAMS_BASE_KEY);

    base("brazil_teams")
      .select({
        view: "Grid view"
      })
      .firstPage(function(err, records) {
        if (err) {
          reject(err);
          return;
        }

        resolve(mapTeams(records));
      });
  });
}
