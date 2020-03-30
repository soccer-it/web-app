import dynamic from 'next/dynamic';

// Components
import Icon from 'components/Icon';

// Styles
import {
  step,
  stepWrapper,
  stepContent,
  navigationWrapper,
  buttonNext,
  buttonPrev,
  buttonIcon
} from '../Onboarding.scss';

const stepsHandlers = {
  askName: dynamic(import('./AskName').then(m => m.default)),
  askContact: dynamic(import('./AskContact').then(m => m.default)),
  done: dynamic(import('./Done').then(m => m.default))
};

export default function Steps({ isLoading, currentStep, onSetupStep, ...stepProps }) {
  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={step}>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div className={stepWrapper}>
          <div className={stepContent}>
            <CurrentStep {...stepProps} />
          </div>
          <div className={navigationWrapper}>
            <button data-prev className={buttonPrev}>Voltar</button>
            <button data-next onClick={onSetupStep} className={buttonNext}>
              Continuar
              <Icon id="arrow-right" className={buttonIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
