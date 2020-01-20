require('dotenv').config();

const request = require('request');
const fs = require('fs');

function getDBTeams() {
  return new Promise((resolve, reject) => {
    request.get(`${process.env.SOCCERIT_SERVICES}/listTeams`, function(err, r, body) {
      if (err || r.statusCode !== 200) {
        return reject(err);
      }

      resolve(JSON.parse(body));
    });
  });
}

const getTeams = () => {
  return new Promise((resolve, reject) => {
    const teamsJson = `public/mappedTeams.json`;

    return getDBTeams()
      .then(mappedTeams => {
        const activeTeams = mappedTeams.filter(({ active }) => !!active);

        fs.writeFile(teamsJson, JSON.stringify({ mappedTeams: activeTeams }), 'utf-8', function(
          err
        ) {
          if (err) {
            return reject(err);
          }

          resolve(activeTeams);
        });
      })
      .catch(reject);
  });
};

try {
  getTeams();
} catch (err) {
  console.log(err);
  process.exit(-1);
}
