import styles from '../Onboarding.scss';

export default function AskName({ userName, setUserName, team }) {
  return (
    <>
      <figure className={styles.banner}>
        <img src={team.images.shirt} alt={`camisa ${team.name}`} />
      </figure>
      <h1 className={styles.title}>
        Mensagem de boas vindas para um fã do time{` `}
        <strong>{team.alias}</strong>
      </h1>
      <div className={styles.field}>
        <label htmlFor="#userName">Como podemos te chamar?</label>
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
