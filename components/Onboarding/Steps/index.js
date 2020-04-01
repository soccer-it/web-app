import { CSSTransition, SwitchTransition } from 'react-transition-group';

// Components
import Loader from 'components/Loader';

// Styles
import { step, stepWrapper } from '../Onboarding.scss';

export default function Steps({
  triggerMotion,
  isLoading,
  currentStep,
  stepsHandlers,
  ...stepProps
}) {
  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={step}>
      <SwitchTransition>
        <CSSTransition key={currentStep} timeout={300} classNames={stepWrapper}>
          <div className={stepWrapper}>
            <Loader visible={isLoading} />
            <CurrentStep {...stepProps} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
