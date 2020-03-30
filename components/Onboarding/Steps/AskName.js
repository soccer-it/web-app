// Style
import { banner, title, field } from '../Onboarding.scss';

export default function AskName({ userName, setUserName, team }) {
  return (
    <>
      <figure className={banner}>
        <img src={team.images.shirt} alt={`camisa ${team.name}`} />
      </figure>
      <h1 className={title}>
        boas vindas para um fã do time{` `}
        <strong>{team.alias}</strong>
      </h1>
      <div className={field}>
        <label htmlFor="#userName">Como podemos te chamar?</label>
        <input
          defaultValue={userName}
          onChange={setUserName}
          type="text"
          name="userName"
          id="userName"
          placeholder="Ronaldo Nazário"
        />
      </div>
    </>
  );
}
