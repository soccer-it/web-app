import { view } from 'react-easy-state';

// Logic
import logic from './logic';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Components
import Icon from 'components/Icon';
import SearchWrapper from 'components/SearchWrapper';
import ThumbSlider from 'components/ThumbSlider';
import TeamsList from 'components/TeamsList';

// Style
import {
  chooseYourTeam,
  title,
  link,
  linkIcon,
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
          <h1 className={title}>escolha seu time</h1>
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
        <a onClick={setupTeam} className={link} href="#">
          selecionar
          <Icon id="arrow-right" className={linkIcon} />
        </a>
        <ThumbSlider teams={teams} currentSelectedIndex={currentSelectedIndex} />
      </div>
    </>
  );
}

export default view(ChooseYourTeam);
