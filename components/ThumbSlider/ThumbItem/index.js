import classnames from 'classnames';

// Styles
import { thumbItem, selected } from './ThumbItem.scss';

export default function SingleTeam({ team }) {
  const { alias, slug } = team;

  return (
    <div
      className={classnames(thumbItem, {
        [selected]: slug === 'CSA'
      })}
    >
      <p className="text">{alias}</p>
    </div>
  );
}
