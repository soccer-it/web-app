import dynamic from 'next/dynamic';
import { CSSTransition } from 'react-transition-group';

// Logic
import logic from '../logic';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Styles
import { step, stepWrapper, loader } from '../Onboarding.scss';

const stepsHandlers = {
  askName: dynamic(import('./AskName').then(m => m.default)),
  askContact: dynamic(import('./AskContact').then(m => m.default)),
  done: dynamic(import('./Done').then(m => m.default))
};

export default function Steps(props) {
  const { triggerMotion, isLoading, currentStep, ...stepProps } = useLogicLayers(props)(logic);

  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={step}>
      {isLoading ? (
        <div className={loader}>Carregando...</div>
      ) : (
        <CSSTransition in={triggerMotion} timeout={300} classNames={stepWrapper}>
          <div className={stepWrapper}>
            <CurrentStep {...stepProps} />
          </div>
        </CSSTransition>
      )}
    </div>
  );
}
