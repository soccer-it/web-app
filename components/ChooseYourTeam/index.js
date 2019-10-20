import ContentSection from "components/ContentSection";
import TeamsList from "./TeamsList";

import { chooseYourTeam, title, search } from './ChooseYourTeam.scss';

import useLogicLayers from "utils/useLogicLayers";
import logic from "./logic";

export default function ChooseYourTeam(props) {
  const { teams, onSwipe } = useLogicLayers(props)(logic);

  return (
    <div className={chooseYourTeam}>
      <div className={title}>escolha seu time</div>
      {/* <div className={search}>
        <input type="search" placeholder="pequisar" />
      </div> */}
      <TeamsList onSwipe={onSwipe} teams={teams} />
    </div>
  );
}
