import { view } from 'react-easy-state';

// Components
import Steps from './Steps';

// Logic
import logic from './logic';

// Utils
import useLogicLayers from 'utils/useLogicLayers';

// Styles
import styles from './Onboarding.scss';

function Onboarding(props) {
  const {
    userSetup,
    onSetupStep,
    currentStep,
    setUserName,
    setUserEmail,
    isLoading,
    stepsHandlers
  } = useLogicLayers(props)(logic);

  const { userName, userEmail, team } = userSetup;

  if (!team) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Steps
        isLoading={isLoading}
        userName={userName}
        userEmail={userEmail}
        team={team}
        setUserName={setUserName}
        setUserEmail={setUserEmail}
        onSetupStep={onSetupStep}
        currentStep={currentStep}
        stepsHandlers={stepsHandlers}
      />
    </div>
  );
}

export default view(Onboarding);
