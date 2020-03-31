import dynamic from 'next/dynamic';

// Components
import FormControl from 'components/FormControl';

// Styles
import { step, stepWrapper, stepContent } from '../Onboarding.scss';

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
          <FormControl onNext={onSetupStep} onPrev={f => f} />
        </div>
      )}
    </div>
  );
}
