module.exports = () => {
  const airtableData = require('../public/mappedTeams.json');

  const dynamicTeamsRoute = airtableData.mappedTeams.reduce((acc, { slug }) => {
    return {
      ...acc,
      [`/escolha-seu-time/${slug.toLowerCase()}/index`]: {
        page: '/choose-your-team'
      }
    };
  }, {});

  return {
    '/': {
      page: '/home'
    },
    '/escolha-seu-time/:team': {
      page: '/choose-your-team'
    },
    ...dynamicTeamsRoute
  };
};
