import classnames from 'classnames';

// Styles
import { thumbItem, selected } from './ThumbItem.scss';

export default function SingleTeam({ team, onSelect }) {
  const { alias, slug } = team;

  return (
    <div
      className={classnames(thumbItem, {
        [selected]: slug === 'CSA'
      })}
      onClick={onSelect}
    >
      <p className="text">{alias}</p>
    </div>
  );
}
