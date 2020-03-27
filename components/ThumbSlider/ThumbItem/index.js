// Styles
import { thumbItem } from './ThumbItem.scss';

export default function SingleTeam({ team }) {
  const { alias } = team;
  return (
    <div className={thumbItem} style={{ width: '120px' }}>
      <p className="text">{alias}</p>
    </div>
  );
}
