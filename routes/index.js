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

  const isStaticBuild = process.env.NODE_ENV === 'production';
  const rootChooseYourTeamRoute = isStaticBuild ? 'index' : ':team';

  let baseRoutes = {
    '/': {
      page: '/home'
    },
    [`/escolha-seu-time/${rootChooseYourTeamRoute}`]: {
      page: '/choose-your-team'
    },
    ...dynamicTeamsRoute
  };

  return baseRoutes;
};
