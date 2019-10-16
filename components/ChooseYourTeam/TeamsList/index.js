import Swipeable from "components/Swipeable";
import Icon from "components/Icon";
import SingleTeam from "../SingleTeam";
import styles from "./TeamsList.scss";
import { view } from "react-easy-state";

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
      <div className="container">
        <a className={styles.link} href="#">
          selecionar
        </a>
        <a href="#" className={styles.nextButton}>
          <Icon id="arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default view(TeamsList);
