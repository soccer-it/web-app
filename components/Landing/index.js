import useLanding from './useLanding';
import { landingWrapper, logo, description, subDescription } from './Landing.scss';

export default function Landing(props) {
  const { trackComingSoonClick } = useLanding(props);

  return (
    <div className={landingWrapper}>
      <a href="https://soccerit.com.br" className={logo}>
        <img src="/images/logo-soccerit.svg" alt="Logo soccerit" />
      </a>
      <div className={description}>
        <p>
          Um novo jeito de torcer, pra você que <span className="feat">ama futebol</span>
        </p>
        <p className={subDescription}>Uma experiência criada por torcedores para torcedores.</p>
      </div>
      <a onClick={trackComingSoonClick} className="buttonWrapper" href="/app/escolha-seu-time">
        Torça com a gente
      </a>
    </div>
  );
}
