import Swipeable from "../../../components/Swipeable";
import SingleTeam from "../SingleTeam";
import styles from "./TeamsList.scss";

export default function TeamsList({ teams }) {
  const itemClass = {
    [styles.teamWrapper]: true
  };

  return (
    <div className={styles.teamsList}>
      <Swipeable className={styles.swipeableWrapper}>
        {teams.map(({ slug, ...team }) => (
          <SingleTeam customClasses={itemClass} key={slug} {...team} />
        ))}
      </Swipeable>
    </div>
  );
}
