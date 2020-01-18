import Steps from './Steps';
import { view } from 'react-easy-state';
import useOnboarding from './useOnboarding';
import styles from './Onboarding.scss';

function Onboarding(props) {
  const {
    userSetup,
    onSetupStep,
    currentStep,
    setUserName,
    setUserEmail,
    isLoading
  } = useOnboarding(props);
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
      />
    </div>
  );
}

export default view(Onboarding);
