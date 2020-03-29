// Logic
import logic from './logic';

// Components
import ThumbItem from './ThumbItem';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Style
import { thumbSliderWrapper } from './ThumbSlider.scss';

function ThumbSlider(props) {
  const { onSelect, teams = [], handlers } = useLogicLayers(props)(logic);
  const { currentSelectedIndex } = handlers;

  return (
    <div className={thumbSliderWrapper} data-slide>
      <div className="swiper-wrapper">
        {teams.map(({ ...team }, index) => {
          return (
            <ThumbItem
              key={team.slug}
              team={team}
              className="swiper-slide"
              onSelect={() => onSelect(index)}
              activeSlide={currentSelectedIndex === index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ThumbSlider;
