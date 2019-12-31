import BaseLayout from 'layouts/BaseLayout';
import ChooseYourTeam from 'components/ChooseYourTeam';

function ChooseYourTeamPage({ brazilTeams }) {
  return (
    <BaseLayout pageName="choose-your-team">
      <ChooseYourTeam teams={brazilTeams} />
    </BaseLayout>
  );
}

ChooseYourTeamPage.getInitialProps = async () => {
  const teamsData = require('../../static/mappedTeams.json');

  return {
    brazilTeams: teamsData.mappedTeams
  };
};

export default ChooseYourTeamPage;
