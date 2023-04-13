import Head from 'next/head';
import withAuth from './api/auth/withAuth';

const Contact = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog: Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-5">
          Contact us page, You must be signed in to see this page
        </div>
      </div>
    </>
  );
};

export default withAuth(Contact);
