import BaseLayout from 'layouts/BaseLayout';
import ChooseYourTeam from 'components/ChooseYourTeam';

function ChooseYourTeamPage({ brazilTeams }) {
  return (
    <BaseLayout pageName="choose-your-team">
      <ChooseYourTeam teams={brazilTeams} />
    </BaseLayout>
  );
}

ChooseYourTeamPage.getInitialProps = async ({ req }) => {
  const { getBrazilTeams } = require('utils/getAirtableData');

  const brazilTeams = await getBrazilTeams();

  return {
    brazilTeams
  };
};

export default ChooseYourTeamPage;
