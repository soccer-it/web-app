// Components
import Icon from 'components/Icon';

// Styles
import { navigationWrapper, buttonNext, buttonPrev, buttonIcon } from './FormControl.scss';

export default function Steps({ onPrev, onNext }) {
  return (
    <div className={navigationWrapper}>
      <button data-prev className={buttonPrev} onClick={onPrev}>
        Voltar
      </button>
      <button data-next onClick={onNext} className={buttonNext}>
        Continuar
        <Icon id="arrow-right" className={buttonIcon} />
      </button>
    </div>
  );
}
