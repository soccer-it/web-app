import AskName from './AskName';
import AskContact from './AskContact';
import styles from '../Onboarding.scss';

const stepsHandlers = {
  askName: AskName,
  askContact: AskContact
};

export default function Steps({ currentStep, onSetupStep, ...stepProps }) {
  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={styles.step}>
      <CurrentStep {...stepProps} />
      <button onClick={onSetupStep} className="buttonWrapper">
        Continuar
      </button>
    </div>
  );
}
