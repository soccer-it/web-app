// Logic
import logic from './logic';

// Components
import ThumbItem from './ThumbItem';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Style
import { thumbSliderWrapper } from './ThumbSlider.scss';

function ThumbSlider(props) {
  const { onSelect, teams = [] } = useLogicLayers(props)(logic);
  
  return (
    <div className={thumbSliderWrapper} data-slide>
      {teams.map(({ ...team }) => {
        return <ThumbItem key={team.slug} team={team} onSelect={onSelect} />;
      })}
    </div>
  );
}

export default ThumbSlider;
