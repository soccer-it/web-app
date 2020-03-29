import classnames from 'classnames';

// Styles
import { thumbItem, thumbItemContent, selected } from './ThumbItem.scss';

export default function SingleTeam({ team, onSelect, activeSlide, className }) {
  const { alias } = team;

  return (
    <div
      className={classnames(thumbItem, {
        [className]: className
      })}
      onClick={onSelect}
    >
      <div
        className={classnames(thumbItemContent, {
          [selected]: activeSlide
        })}
      >
        <p className="text">{alias}</p>
      </div>
    </div>
  );
}
