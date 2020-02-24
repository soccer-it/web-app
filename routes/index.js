const getLowerCaseSlug = require('../utils/getLowerCaseSlug');

module.exports = () => {
  const teamsData = require('../public/mappedTeams.json');

  const dynamicTeamsRoute = teamsData.mappedTeams.reduce((acc, currentTeam) => {
    const teamSlug = getLowerCaseSlug(currentTeam);

    return {
      ...acc,
      [`/escolha-seu-time/${teamSlug}/index`]: {
        page: '/choose-your-team'
      }
    };
  }, {});

  const isStaticBuild = process.env.NODE_ENV === 'production';
  const localRoot = isStaticBuild ? 'index' : ':id';

  let baseRoutes = {
    '/': {
      page: '/home'
    },
    [`/app/${localRoot}`]: {
      page: '/app/onboarding'
    },
    [`/escolha-seu-time/${localRoot}`]: {
      page: '/choose-your-team'
    },
    ...dynamicTeamsRoute
  };

  return baseRoutes;
};
