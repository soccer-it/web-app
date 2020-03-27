// Components
import Swipeable from 'components/Swipeable';
import ThumbItem from './ThumbItem';

// Style
import { thumbSliderWrapper, itemSlide, teamsThumbList } from './ThumbSlider.scss';

function ThumbSlider({ teams = [], onSwipe, currentSelectedIndex }) {
  return (
    <div className={teamsThumbList}>
      <Swipeable
        index={currentSelectedIndex}
        onChangeIndex={onSwipe}
        slideClassName={itemSlide}
        className={thumbSliderWrapper}
        
      >
        {teams.map(({ slug, ...team }) => {
          return <ThumbItem key={slug} team={team} />;
        })}
      </Swipeable>
    </div>
  );
}

export default ThumbSlider;
