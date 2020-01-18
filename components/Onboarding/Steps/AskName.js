import styles from '../Onboarding.scss';

export default function AskName({ userName, setUserName, team }) {
  return (
    <>
      <figure className={styles.banner}>
        <img src={team.banner} alt={`camisa ${team.name}`} />
      </figure>
      <h1 className={styles.title}>
        <strong>{team.alias}</strong>? Ótimo!
      </h1>
      <div className="field">
        <label htmlFor="#userName">Precisamos saber como te chamar. Qual é seu nome?</label>
        <input
          defaultValue={userName}
          onChange={setUserName}
          type="text"
          name="userName"
          id="userName"
        />
      </div>
    </>
  );
}
