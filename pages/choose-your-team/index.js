import Head from 'next/head';
import BaseLayout from 'layouts/BaseLayout';
import ChooseYourTeam from 'components/ChooseYourTeam';

function ChooseYourTeamPage({ teams }) {
  return (
    <BaseLayout pageName="choose-your-team">
      <Head>
        <title key="title">soccerit | Escolha seu time</title>
      </Head>
      <ChooseYourTeam teams={teams} />
    </BaseLayout>
  );
}

ChooseYourTeamPage.getInitialProps = async () => {
  const teamsData = require('../../public/mappedTeams.json');

  return {
    teams: teamsData.mappedTeams
  };
};

export default ChooseYourTeamPage;
