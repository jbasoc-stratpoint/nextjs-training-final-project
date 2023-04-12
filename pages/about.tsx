import Head from 'next/head';
import withAuth from './api/auth/withAuth';

function About() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog: About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>In About page</div>
      </div>
    </>
  );
}

export default withAuth(About);
