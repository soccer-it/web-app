import classnames from 'classnames';

// Styles
import { thumbItem, selected } from './ThumbItem.scss';

export default function SingleTeam({ team, onSelect, activeSlide, className }) {
  const { alias } = team;

  return (
    <div
      className={classnames(thumbItem, {
        [selected]: activeSlide,
        [className]: className
      })}
      onClick={onSelect}
    >
      <p className="text">{alias}</p>
    </div>
  );
}
