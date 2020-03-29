import { userConfig } from 'utils/store';
import { getTeamPhoto } from './helpers';
import ga from 'utils/ga';
import browserHistory from 'utils/browserHistory';
import Router from 'next/router';

const getLowerCaseSlug = require('utils/getLowerCaseSlug');

module.exports = {
  setTeamGlobalConfig: () => currentTeam => {
    const [baseThemeColor, baseContentColor] = ['base-theme-color', 'base-content-color'];

    userConfig.userSetup.team = currentTeam;
    userConfig.theme = {
      [baseThemeColor]: currentTeam[baseThemeColor],
      [baseContentColor]: currentTeam[baseContentColor]
    };
  },

  setupTeam: ({ setTeamGlobalConfig, currentTeam }) => e => {
    e.preventDefault();

    setTeamGlobalConfig(currentTeam);
    Router.push(`/app/onboarding`);
  },

  setTeam: ({ setTeamGlobalConfig, setCurrentTeamBanner }) => currentTeam => {
    setTeamGlobalConfig(currentTeam);
    browserHistory().replace(`/app/escolha-seu-time/${getLowerCaseSlug(currentTeam)}`);
    setCurrentTeamBanner(null);

    // ga('event', 'view', {
    //   event_category: 'Teams',
    //   event_label: currentTeam.name,
    //   non_interaction: true
    // });

    const teamBanner = currentTeam.images.shirt;

    setCurrentTeamBanner(teamBanner);
  },

  onSelectResult: ({ setupTeam, setTeam }) => (e, currentTeam) => {
    e.preventDefault();

    setTeam(currentTeam);
    setupTeam(e);
  },

  onSwipe: ({ setCurrentTeam, teams, setCurrentSelectedIndex }) => index => {
    
    const currentTeam = teams[index];

    setCurrentSelectedIndex(index);
    setCurrentTeam(currentTeam);
  },

  goNext: ({ setCurrentTeam, teams, currentSelectedIndex, setCurrentSelectedIndex }) => e => {
    e.preventDefault();

    let nextItem = currentSelectedIndex + 1;
    setCurrentSelectedIndex(nextItem);
    setCurrentTeam(teams[nextItem]);
  },

  goPrev: ({ setCurrentTeam, teams, currentSelectedIndex, setCurrentSelectedIndex }) => e => {
    e.preventDefault();

    let prevItem = currentSelectedIndex - 1;
    setCurrentSelectedIndex(prevItem);
    setCurrentTeam(teams[prevItem]);
  },

  activeSearch: ({ teams }) => e => {
    e.preventDefault();

    userConfig.searchWrapper.active = true;
    userConfig.searchWrapper.data = teams;
  }
};
