import Head from 'next/head';
import BaseLayout from 'layouts/BaseLayout';
import Landing from 'components/Landing';

function Home() {
  return (
    <BaseLayout pageName="home">
      <Head>
        <title key="title">soccerit | Um novo jeito de torcer</title>
      </Head>
      <Landing />
    </BaseLayout>
  );
}

export default Home;
