import Swipeable from 'components/Swipeable';
import SingleTeam from '../SingleTeam';


// TODO: remover essas regras para um lugar próprio do TeamsList
import {
  teamWrapper,
  swipeableWrapper,
  teamsList,
} from '../ChooseYourTeam.scss';

function TeamsList({
  setupTeam,
  onSwipe,
  teams,
  currentSelectedIndex,
  currentTeamBanner
}) {
  const itemClass = {
    [teamWrapper]: true
  };

  return (
    <div className={teamsList}>
      <Swipeable
        index={currentSelectedIndex}
        onChangeIndex={onSwipe}
        className={swipeableWrapper}
        id="sliderWrapper"
      >
        {teams.map(({ slug, ...team }) => (
          <SingleTeam
            setupTeam={setupTeam}
            customClasses={itemClass}
            key={slug}
            {...team}
            currentTeamBanner={currentTeamBanner}
          />
        ))}
      </Swipeable>
    </div>
  );
}

export default TeamsList;
