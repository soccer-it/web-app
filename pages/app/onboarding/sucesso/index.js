import Head from 'next/head';

// Components
import BaseLayout from 'layouts/BaseLayout';
import Onboarding from 'components/Onboarding';

export default function SucessoPage() {
  return (
    <BaseLayout pageName="onboarding">
      <Head>
        <title key="title">soccerit | seja bem-vindo</title>
      </Head>
      <Onboarding step="done" />
    </BaseLayout>
  );
}
