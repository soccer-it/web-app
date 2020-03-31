// Components
import EmailField from 'components/EmailField';

// Styles
import { field } from '../Onboarding.scss';
import { title, subtitle, paragraph } from './Steps.scss';

export default function AskContact({ userName, setUserEmail, userEmail }) {
  return (
    <>
      <h1 className={title}>bem-vindo, {userName}!</h1>
      <h2 className={subtitle}>topa receber as últimas notícias sobre o furacão?</h2>
      <p className={paragraph}>
        estamos construindo um app muito foda! Enquanto isso, deixe seu email com a gente aí pô.
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
    </>
  );
}
