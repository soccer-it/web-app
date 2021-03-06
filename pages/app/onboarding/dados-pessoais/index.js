import Head from 'next/head';

// Components
import BaseLayout from 'layouts/BaseLayout';
import Onboarding from 'components/Onboarding';

export default function PersonalDataPage() {
  return (
    <BaseLayout pageName="onboarding">
      <Head>
        <title key="title">soccerit | seja bem-vindo</title>
      </Head>
      <Onboarding step="askName" />
    </BaseLayout>
  );
}
