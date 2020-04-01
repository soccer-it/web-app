import { CSSTransition } from 'react-transition-group';

// Components
import Loader from 'components/Loader';

// Logic
import logic from '../logic';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Styles
import { step, stepWrapper } from '../Onboarding.scss';

export default function Steps(props) {
  const { triggerMotion, isLoading, currentStep, stepsHandlers, ...stepProps } = useLogicLayers(
    props
  )(logic);

  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={step}>
      <CSSTransition in={triggerMotion} timeout={300} classNames={stepWrapper}>
        <div className={stepWrapper}>
          <Loader visible={isLoading} />
          <CurrentStep {...stepProps} />
        </div>
      </CSSTransition>
    </div>
  );
}
