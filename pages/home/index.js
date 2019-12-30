import BaseLayout from 'layouts/BaseLayout';
import Link from 'next/link';

function Home() {
  return (
    <BaseLayout pageName="home">
      <img src="/static/images/logo-soccerit.svg" alt="Logo soccerit" />
      <h1>
        Um novo jeito de torcer, pra você que ama futebol. Uma experiência criada por torcedores
        para torcedores.
      </h1>
      <Link>
        <a href="/escolha-seu-time">Torça com a gente</a>
      </Link>
    </BaseLayout>
  );
}

export default Home;
