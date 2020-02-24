import TeamsList from './TeamsList';
import SearchWrapper from 'components/SearchWrapper';
import Icon from 'components/Icon';
import { view } from 'react-easy-state';
import useLogicLayers from 'utils/useLogicLayers';
import logic from './logic';

import {
  chooseYourTeam,
  title,
  link,
  searchLink,
  singleResult,
  singleResultBanner,
  topBar
} from './ChooseYourTeam.scss';

function ChooseYourTeam(props) {
  const {
    currentTeamBanner,
    setupTeam,
    teams,
    onSwipe,
    activeSearch,
    currentSelectedIndex,
    goPrev,
    onSelectResult,
    goNext
  } = useLogicLayers(props)(logic);

  const SingleResult = team => {
    const { images, alias } = team;
    const { shirt } = images;

    /* Refactor SingleResult Component */
    return (
      <div className={singleResult} onClick={e => onSelectResult(e, team)}>
        <img className={singleResultBanner} src={shirt} alt={alias} />
        <span>{alias}</span>
      </div>
    );
  };

  return (
    <>
      <SearchWrapper singleResult={SingleResult} />
      <div className={chooseYourTeam}>
        <div className={topBar}>
          <h1 className={title}>Qual time faz seu coração bater mais forte?</h1>
          <a className={searchLink} href="#" onClick={activeSearch}>
            <Icon id="search" />
          </a>
        </div>
        <TeamsList
          setupTeam={setupTeam}
          currentTeamBanner={currentTeamBanner}
          goPrev={goPrev}
          goNext={goNext}
          currentSelectedIndex={currentSelectedIndex}
          onSwipe={onSwipe}
          teams={teams}
        />
        <div>
          <a onClick={setupTeam} className={link} href="#">
            selecionar
            <Icon id="arrow-right" />
          </a>
        </div>
      </div>
    </>
  );
}

export default view(ChooseYourTeam);
