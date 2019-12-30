import { userConfig } from 'utils/store';
import { getTeamPhoto } from './helpers';

module.exports = (useEffect, { setTeamTheme, setCurrentTeam, teams, currentTeam }) => {
  useEffect(() => {
    if (!currentTeam) {
      setCurrentTeam(teams[0]);
    } else {
      userConfig.theme = currentTeam.theme;
      setTeamTheme(currentTeam);
    }
  }, [currentTeam]);
};
