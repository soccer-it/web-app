import ContentSection from "components/ContentSection";
import TeamsList from "./TeamsList";

import useLogicLayers from "utils/useLogicLayers";
import logic from "./logic";

export default function ChooseYourTeam(props) {
  const { teams, onSwipe } = useLogicLayers(props)(logic);

  return (
    <ContentSection title="Qual time faz seu coração bater mais forte?">
      <TeamsList onSwipe={onSwipe} teams={teams} />
    </ContentSection>
  );
}
