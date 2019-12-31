import { userConfig } from 'utils/store';
import { getTeamPhoto } from './helpers';
import browserHistory from 'utils/browserHistory';

module.exports = {
  setTeam: ({ setCurrentTeamBanner }) => currentTeam => {
    userConfig.theme = currentTeam.theme;
    browserHistory().replace(`/escolha-seu-time/${currentTeam.slug.toLowerCase()}`);

    getTeamPhoto(currentTeam.banner).then(blobImage => {
      setCurrentTeamBanner(blobImage);
    });
  },

  onSwipe: ({ setTeam, teams, setCurrentSelectedIndex }) => index => {
    const currentTeam = teams[index];
    setCurrentSelectedIndex(index);

    setTeam(currentTeam);
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
