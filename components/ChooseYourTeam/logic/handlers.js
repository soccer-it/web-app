import { userConfig } from 'utils/store';
import getLowerCaseSlug from 'utils/getLowerCaseSlug';
import Router from 'next/router';

module.exports = {
  setTeamGlobalConfig: () => (currentTeam) => {
    const [baseThemeColor, baseContentColor, baseFeaturedColor] = [
      'base-theme-color',
      'base-content-color',
      'base-featured-color'
    ];

    userConfig.userSetup.team = currentTeam;
    userConfig.theme = {
      [baseThemeColor]: currentTeam[baseThemeColor],
      [baseContentColor]: currentTeam[baseContentColor],
      [baseFeaturedColor]: currentTeam[baseFeaturedColor]
    };
  },

  setupTeam: ({ setTeamGlobalConfig, currentTeam }) => (e) => {
    e.preventDefault();

    setTeamGlobalConfig(currentTeam);
    Router.replace(`/app/onboarding`);
  },

  setTeam: ({ setTeamGlobalConfig }) => (currentTeam) => {
    const teamBanner = currentTeam.images.shirt;

    setTeamGlobalConfig(currentTeam);
  },

  onSelectResult: ({ setupTeam, setTeam }) => (e, currentTeam) => {
    e.preventDefault();

    setTeam(currentTeam);
    setupTeam(e);
  },

  onSwipe: ({ setCurrentTeam, teams, setCurrentSelectedIndex }) => (index) => {
    const currentTeam = teams[index];

    setCurrentSelectedIndex(index);
    setCurrentTeam(currentTeam);
    Router.push(`/app/escolha-seu-time/?team=${getLowerCaseSlug(currentTeam)}`);
  },

  activeSearch: ({ teams }) => (e) => {
    e.preventDefault();

    userConfig.searchWrapper.active = true;
    userConfig.searchWrapper.data = teams;
  }
};
