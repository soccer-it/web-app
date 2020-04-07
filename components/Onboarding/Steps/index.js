import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

// Components
import Loader from 'components/Loader';

// Styles
import { step, stepWrapper } from '../Onboarding.scss';
import { enter, enterDone } from './Steps.scss';

export default function Steps({
  triggerMotion,
  isLoading,
  currentStep,
  stepsHandlers,
  ...stepProps
}) {
  const [CurrentStepComponent, setCurrentStepComponent] = useState(null);
  useEffect(() => {
    setCurrentStepComponent(stepsHandlers[currentStep]);
  }, [currentStep]);

  return (
    <div className={step}>
      <SwitchTransition>
        <CSSTransition
          key={currentStep}
          timeout={300}
          transitionentertimeout={500}
          transitionexittimeout={500}
          unmountOnExit
          mountOnEnter
          classNames={{
            enter: enter,
            enterDone: enterDone
          }}
        >
          <div className={stepWrapper}>
            <Loader visible={isLoading} />
            {CurrentStepComponent && <CurrentStepComponent {...stepProps} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
