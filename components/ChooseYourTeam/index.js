import TeamsList from './TeamsList';
import SearchWrapper from 'components/SearchWrapper';
import useLogicLayers from 'utils/useLogicLayers';
import logic from './logic';

import {
  chooseYourTeam,
  title,
  link,
  searchLink,
  singleResult,
  singleResultBanner
} from './ChooseYourTeam.scss';

function ChooseYourTeam(props) {
  const {
    currentTeamBanner,
    teams,
    onSwipe,
    activeSearch,
    currentSelectedIndex,
    goPrev,
    goNext
  } = useLogicLayers(props)(logic);

  const SingleResult = ({ banner, slug }) => {
    return (
      <div className={singleResult}>
        <img className={singleResultBanner} src={banner} alt={slug} />
        <span>{slug}</span>
      </div>
    );
  };

  return (
    <>
      <SearchWrapper singleResult={SingleResult} />
      <div className={chooseYourTeam}>
        <div className={title}>Qual time faz seu coração bater mais forte?</div>
        <TeamsList
          currentTeamBanner={currentTeamBanner}
          goPrev={goPrev}
          goNext={goNext}
          currentSelectedIndex={currentSelectedIndex}
          onSwipe={onSwipe}
          teams={teams}
        />
        <div>
          <a className={link} href="#">
            selecionar
          </a>
          <a className={searchLink} href="#" onClick={activeSearch}>
            pesquisar time
          </a>
        </div>
      </div>
    </>
  );
}

export default ChooseYourTeam;
