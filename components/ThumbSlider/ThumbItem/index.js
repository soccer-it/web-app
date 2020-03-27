// Styles
import { thumbItem } from './ThumbItem.scss';

export default function SingleTeam({ team }) {
  const { alias } = team;
  return (
    <div className={thumbItem}>
      <p className="text">{alias}</p>
    </div>
  );
}
