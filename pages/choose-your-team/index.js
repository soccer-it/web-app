import BaseLayout from 'layouts/BaseLayout';
import ChooseYourTeam from 'components/ChooseYourTeam';
import useGA from 'hooks/useGA';

function ChooseYourTeamPage({ brazilTeams }) {
  useGA();

  return (
    <BaseLayout pageName="choose-your-team">
      <ChooseYourTeam teams={brazilTeams} />
    </BaseLayout>
  );
}

ChooseYourTeamPage.getInitialProps = async () => {
  const teamsData = require('../../public/mappedTeams.json');

  return {
    brazilTeams: teamsData.mappedTeams
  };
};

export default ChooseYourTeamPage;
