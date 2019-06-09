import BaseLayout from "../../layouts/BaseLayout";
import ChooseYourTeam from "../../components/ChooseYourTeam";

import teams from "../../mocks/teams";

export default function ChooseYourTeamPage() {
  return (
    <BaseLayout pageName="choose-your-team">
      <ChooseYourTeam teams={teams} />
    </BaseLayout>
  );
}
