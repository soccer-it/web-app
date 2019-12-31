import ga from 'utils/ga';
import { useRouter } from 'next/router';

module.exports = (
  useEffect,
  { setCurrentSelectedIndex, setTeam, setCurrentTeam, teams, currentTeam }
) => {
  const { asPath } = useRouter();

  useEffect(() => {
    const currentRoute = asPath.split('/').pop();
    const slugIndex = teams.findIndex(({ slug }) => slug.toLowerCase() === currentRoute);
    const currentTeamIndex = slugIndex !== -1 ? slugIndex : 0;

    if (!currentTeam) {
      setCurrentTeam(teams[currentTeamIndex]);
      setCurrentSelectedIndex(currentTeamIndex);
    } else {
      setTeam(currentTeam);
    }
  }, [currentTeam]);
};
