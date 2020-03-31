import dynamic from 'next/dynamic';

// Styles
import { step, stepWrapper, stepContent, loader } from '../Onboarding.scss';

const stepsHandlers = {
  askName: dynamic(import('./AskName').then(m => m.default)),
  askContact: dynamic(import('./AskContact').then(m => m.default)),
  done: dynamic(import('./Done').then(m => m.default))
};

export default function Steps({ isLoading, currentStep, ...stepProps }) {
  const CurrentStep = stepsHandlers['done'];

  return (
    <div className={step}>
      {isLoading ? (
        <div className={loader}>Carregando...</div>
      ) : (
        <div className={stepWrapper}>
          <CurrentStep {...stepProps} />
        </div>
      )}
    </div>
  );
}
