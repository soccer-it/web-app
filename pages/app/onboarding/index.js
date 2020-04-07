import BaseLayout from 'layouts/BaseLayout';
import Head from 'next/head';
import Onboarding from 'components/Onboarding';

export default function OnboardingPage() {
  return (
    <BaseLayout pageName="onboarding">
      <Head>
        <title key="title">soccerit | Seja bem-vindo</title>
      </Head>
      <Onboarding step="askName" />
    </BaseLayout>
  );
}
