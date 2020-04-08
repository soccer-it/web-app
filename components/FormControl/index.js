// Components
import Icon from 'components/Icon';

// Styles
import { navigationWrapper, buttonNext, buttonPrev, buttonIcon } from './FormControl.scss';

export default function Steps({
  onPrev,
  onNext,
  nextLabel = "continuar",
  prevLabel = "voltar"
}) {
  return (
    <div className={navigationWrapper}>
      <button data-prev className={buttonPrev} onClick={onPrev}>
        {prevLabel}
      </button>
      <button data-next onClick={onNext} className={buttonNext}>
        {nextLabel}
        <Icon id="arrow-right" className={buttonIcon} />
      </button>
    </div>
  );
}
