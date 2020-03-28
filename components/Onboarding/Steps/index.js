import dynamic from 'next/dynamic';
import styles from '../Onboarding.scss';

const stepsHandlers = {
  askName: dynamic(import('./AskName').then(m => m.default)),
  askContact: dynamic(import('./AskContact').then(m => m.default)),
  done: dynamic(import('./Done').then(m => m.default))
};

export default function Steps({ isLoading, currentStep, onSetupStep, ...stepProps }) {
  const CurrentStep = stepsHandlers[currentStep];

  return (
    <div className={styles.step}>
      {isLoading ? (
        <div>... carregando</div>
      ) : (
        <div className={styles.stepWrapper}>
          <div className={styles.stepContent}>
            <CurrentStep {...stepProps} />
          </div>
          <div className={styles.navigationWrapper}>
            <button>Voltar</button>
            <button onClick={onSetupStep}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
