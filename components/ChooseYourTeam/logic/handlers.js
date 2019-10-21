import { userConfig } from "utils/store";

module.exports = {
  onSwipe: ({ teams }) => index => {
    const currentTeam = teams[index];
    userConfig.theme = currentTeam.theme;
  },

  activeSearch: ({ teams }) => (e) => {
    e.preventDefault();

    userConfig.searchWrapper.active = true;
    userConfig.searchWrapper.data = teams;
  }
};