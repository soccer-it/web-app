import AskForPush from 'components/AskForPush';
import EmailField from 'components/EmailField';
import styles from '../Onboarding.scss';

export default function AskContact({ userName, setUserEmail, userEmail }) {
  return (
    <>
      <AskForPush />
      <h1 className={styles.title}>
        <br /> Seja bem-vindo {userName}!
      </h1>
      <h2>Mais um louco para o bando!</h2>
      <div>
        <EmailField
          inputProps={{
            defaultValue: userEmail
          }}
          onFieldChange={setUserEmail}
          className={styles.field}
        />
      </div>
    </>
  );
}
