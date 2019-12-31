import Link from 'next/link';
import { landingWrapper, logo, description, subDescription, buttonWrapper } from './Landing.scss';

export default function Landing() {
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
      <Link>
        <a className={buttonWrapper} href="/escolha-seu-time">
          Torça com a gente
        </a>
      </Link>
    </div>
  );
}
