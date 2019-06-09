import ContentSection from "../../components/ContentSection";
import TeamsList from "./TeamsList";

export default function ChooseYourTeam({ teams = [] }) {
  return (
    <ContentSection title="escolha seu time">
      <TeamsList teams={teams} />
    </ContentSection>
  );
}
