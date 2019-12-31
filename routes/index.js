const getLowerCaseSlug = require('../utils/getLowerCaseSlug');

module.exports = () => {
  const airtableData = require('../public/mappedTeams.json');

  const dynamicTeamsRoute = airtableData.mappedTeams.reduce((acc, currentTeam) => {
    const teamSlug = getLowerCaseSlug(currentTeam);

    return {
      ...acc,
      [`/times/${teamSlug}/index`]: {
        page: '/teams/welcome'
      },
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
    [`/times/${localRoot}`]: {
      page: '/teams/welcome'
    },
    [`/escolha-seu-time/${localRoot}`]: {
      page: '/choose-your-team'
    },
    ...dynamicTeamsRoute
  };

  return baseRoutes;
};
