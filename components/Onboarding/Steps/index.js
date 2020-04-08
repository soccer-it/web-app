import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

// Components
import Loader from 'components/Loader';

// Styles
import { step, stepWrapper } from '../Onboarding.scss';
import { enter, enterDone, exitDone } from './Steps.scss';

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
          mountOnEnter
          classNames={{
            enter: enter,
            enterDone: enterDone,
            exitDone: exitDone
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
