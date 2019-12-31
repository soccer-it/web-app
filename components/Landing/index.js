import ga from 'utils/ga';
import Router from 'next/router';
import { landingWrapper, logo, description, subDescription, buttonWrapper } from './Landing.scss';

export default function Landing() {
  const trackComingSoonClick = e => {
    e.preventDefault();

    ga('event', 'view', {
      event_category: 'CTA',
      event_label: 'Coming Soon Call to Action',
      non_interaction: true
    });

    Router.push('/escolha-seu-time/');
  };

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
      <a onClick={trackComingSoonClick} className={buttonWrapper} href="/escolha-seu-time">
        Torça com a gente
      </a>
    </div>
  );
}
