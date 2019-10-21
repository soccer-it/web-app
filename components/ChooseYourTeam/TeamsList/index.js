import Swipeable from "components/Swipeable";
import SingleTeam from "../SingleTeam";
import styles from "../ChooseYourTeam.scss";

function TeamsList({ onSwipe, teams }) {
  const itemClass = {
    [styles.teamWrapper]: true
  };

  return (
    <div className={styles.teamsList}>
      <Swipeable onChangeIndex={onSwipe} className={styles.swipeableWrapper}>
        {teams.map(({ slug, ...team }) => (
          <SingleTeam customClasses={itemClass} key={slug} {...team} />
        ))}
      </Swipeable>
    </div>
  );
}

export default TeamsList;
