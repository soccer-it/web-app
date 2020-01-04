import AskName from './AskName';
import AskContact from './AskContact';
import Done from './Done';
import styles from '../Onboarding.scss';

const stepsHandlers = {
  askName: AskName,
  askContact: AskContact,
  done: Done
};

export default function Steps({ isLoading, currentStep, onSetupStep, ...stepProps }) {
  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={styles.step}>
      {isLoading ? (
        <div>... carregando</div>
      ) : (
        <>
          <CurrentStep {...stepProps} />
          <button onClick={onSetupStep} className="buttonWrapper">
            Continuar
          </button>
        </>
      )}
    </div>
  );
}
