import { userConfig } from "utils/store";

module.exports = (useEffect, { setCurrentTeam, teams, currentTeam }) => {
  useEffect(() => {
    if (!currentTeam) {
      setCurrentTeam(teams[0]);
    } else {
      userConfig.theme = currentTeam.theme;
    }
  }, [currentTeam]);
};
