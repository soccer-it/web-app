import { CSSTransition, SwitchTransition } from 'react-transition-group';

// Components
import Loader from 'components/Loader';

// Styles
import { step, stepWrapper } from '../Onboarding.scss';
import { enter, enterDone } from './Steps.scss'

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
        <CSSTransition key={currentStep} timeout={300} transitionentertimeout={500} classNames={
          {
            enter: enter,
            enterDone: enterDone,
          }
        }>
          <div className={stepWrapper}>
            <Loader visible={isLoading} />
            {CurrentStep && <CurrentStep {...stepProps} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
