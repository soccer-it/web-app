import TeamsList from "./TeamsList";
import Icon from "components/Icon";
import useLogicLayers from "utils/useLogicLayers";
import logic from "./logic";

import { chooseYourTeam, title, link, searchLink, nextButton } from './ChooseYourTeam.scss';

function ChooseYourTeam(props) {
  const { teams, onSwipe, activeSearch } = useLogicLayers(props)(logic);

  return (
    <>
      <div className={chooseYourTeam}>
        <div className={title}>escolha seu time</div>
        <TeamsList onSwipe={onSwipe} teams={teams} />
        <div>
          <a className={link} href="#">
            selecionar
        </a>
          <a className={searchLink} href="#" onClick={activeSearch}>
            pesquisar time
        </a>
          <a href="#" className={nextButton}>
            <Icon id="arrow-right" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ChooseYourTeam;