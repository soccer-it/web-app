import Swipeable from 'components/Swipeable';
import SingleTeam from '../SingleTeam';
import Icon from 'components/Icon';
import styles from '../ChooseYourTeam.scss';

function TeamsList({ onSwipe, teams, goNext, goPrev, currentSelectedIndex, currentTeamBanner }) {
  const itemClass = {
    [styles.teamWrapper]: true
  };

  const hasPrevItem = currentSelectedIndex > 0;
  const hasNextItem = currentSelectedIndex !== teams.length - 1;

  return (
    <div className={styles.teamsList}>
      <Swipeable
        index={currentSelectedIndex}
        onChangeIndex={onSwipe}
        className={styles.swipeableWrapper}
      >
        {teams.map(({ slug, ...team }) => (
          <SingleTeam
            customClasses={itemClass}
            key={slug}
            {...team}
            currentTeamBanner={currentTeamBanner}
          />
        ))}
      </Swipeable>
      <div>
        {hasPrevItem && (
          <a onClick={goPrev} href="#" className={styles.navButton} data-nav="prev">
            <Icon id="prev" />
          </a>
        )}
        {hasNextItem && (
          <a onClick={goNext} href="#" className={styles.navButton} data-nav="next">
            <Icon id="next" />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamsList;
