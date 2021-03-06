import Router from 'next/router';

// Styles
import { stepContent } from '../Onboarding.scss';
import { title, banner, field } from './Steps.scss';

// Components
import FormControl from 'components/FormControl';
import PlaceholderShirt from 'components/PlaceholderShirt';

export default function AskName({ userName, setUserName, team, onNext }) {
  return (
    <>
      <div className={stepContent}>
        <figure className={banner}>
          <img src={team.images.shirt} alt={`camisa ${team.name}`} />
          <PlaceholderShirt />
        </figure>
        <h1 className={title}>
          boas vindas para um fã <br /> do {` `}
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
      </div>
      <FormControl onNext={onNext} onPrev={() => Router.push('/app/escolha-seu-time/')} />
    </>
  );
}
