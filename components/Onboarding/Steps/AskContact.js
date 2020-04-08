import Router from 'next/router';

// Components
import EmailField from 'components/EmailField';
import FormControl from 'components/FormControl';

// Styles
import { stepContent } from '../Onboarding.scss';
import { title, subtitle, paragraph, field } from './Steps.scss';

export default function AskContact({ userName, setUserEmail, userEmail, onNext, team }) {
  const { alias } = team
  console.log(alias);
  
  return (
    <>
      <div className={stepContent}>
        <h1 className={title}>bem-vindo, {userName}!</h1>
        <h2 className={subtitle}>topa receber as últimas notícias sobre o {alias}?</h2>
        <p className={paragraph}>
          estamos construindo um serviço muito foda! Enquanto não fica pronto, deixe seu email aí com a gente!
        </p>
        <div>
          <EmailField
            inputProps={{
              defaultValue: userEmail
            }}
            placeholder="ronaldo9@gmail.com"
            onFieldChange={setUserEmail}
            className={field}
          />
        </div>
      </div>
      <FormControl
        onNext={onNext}
        onPrev={() => Router.push('/app/onboarding/dados-pessoais')}
        nextLabel={'inscrever-se'}
      />
    </>
  );
}
