import BaseLayout from 'layouts/BaseLayout';
import Landing from 'components/Landing';

function Home() {
  return (
    <BaseLayout pageName="home">
      <Landing />
    </BaseLayout>
  );
}

export default Home;
