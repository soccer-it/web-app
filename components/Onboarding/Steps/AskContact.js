import styles from '../Onboarding.scss';

export default function AskContact({ userName, setUserEmail, userEmail }) {
  return (
    <>
      <h1 className={styles.title}>
        <br /> Seja bem-vindo {userName}!
      </h1>
      <h2>Mais um louco para o bando!</h2>
      <div className="field">
        <label htmlFor="#userEmail">E-mail?</label>
        <input
          defaultValue={userEmail}
          onChange={setUserEmail}
          type="text"
          name="userEmail"
          id="userEmail"
        />
      </div>
    </>
  );
}