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
  const { teams, onSwipe, activeSearch, currentSelectedIndex, goPrev, goNext } = useLogicLayers(
    props
  )(logic);

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
        <div className={title}>escolha seu time</div>
        <TeamsList
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
