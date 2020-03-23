// Components
import Swipeable from 'components/Swipeable';

// Style
import { thumbBox, thumbSliderWrapper } from './ThumbSlider.scss';

function ThumbSlider({ teams }) {
  return (
    <Swipeable slideClassName="thumbItem" index="1" onChangeIndex={f => f} className={thumbSliderWrapper} id="thumbSliderWrapper">
      {teams.map(({ alias }) => {
        return (
          <div className={thumbBox}>
            <p className="text">{alias}</p>
          </div>
        );
      })}
    </Swipeable>
  );
}

export default ThumbSlider;
