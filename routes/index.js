module.exports = () => {
  const airtableData = require('../static/mappedTeams.json');

  const dynamicTeamsRoute = airtableData.mappedTeams.reduce((acc, { slug }) => {
    return {
      ...acc,
      [`/escolha-seu-time/${slug.toLowerCase()}`]: {
        page: '/choose-your-team'
      }
    };
  }, {});

  return {
    '/': {
      page: '/home'
    },
    '/escolha-seu-time': {
      page: '/choose-your-team'
    },
    ...dynamicTeamsRoute
  };
};
