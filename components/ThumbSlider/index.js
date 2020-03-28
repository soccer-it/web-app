// Components
import ThumbItem from './ThumbItem';

// Style
import { thumbSliderWrapper } from './ThumbSlider.scss';

function ThumbSlider({ teams = [] }) {
  return (
    <div className={thumbSliderWrapper}>
      {teams.map(({ ...team }) => {
        return <ThumbItem key={team.slug} team={team} />;
      })}
    </div>
  );
}

export default ThumbSlider;
