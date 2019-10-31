import { userConfig } from 'utils/store';

module.exports = {
  onSwipe: ({ teams, setCurrentSelectedIndex }) => index => {
    const currentTeam = teams[index];
    setCurrentSelectedIndex(index);

    userConfig.theme = currentTeam.theme;
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
