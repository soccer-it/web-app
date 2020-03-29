// Components
import Swipeable from 'components/Swipeable';
import SingleTeam from './SingleTeam';

import { swipeableWrapper, teamsList, itemClass } from './TeamsList.scss';

function TeamsList({ setupTeam, onSwipe, teams = [], currentSelectedIndex, currentTeamBanner }) {
  return (
    <div className={teamsList}>
      <Swipeable
        index={currentSelectedIndex}
        onChangeIndex={onSwipe}
        slideClassName={itemClass}
        className={swipeableWrapper}
      >
        {teams.map(({ slug, ...team }) => (
          <SingleTeam
            setupTeam={setupTeam}
            key={slug}
            team={team}
            currentTeamBanner={currentTeamBanner}
          />
        ))}
      </Swipeable>
    </div>
  );
}

export default TeamsList;
