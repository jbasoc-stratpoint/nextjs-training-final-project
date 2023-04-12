import { getSession } from 'next-auth/react';
import Head from 'next/head';
import withAuth from './api/auth/withAuth';

const Contact = ({ data }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog: Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Contact us page, {data}</div>
      </div>
    </>
  );
};

export default withAuth(Contact);

export async function getServerSideProps(context) {
  const session = await getSession(context);
  //secure pages on server side next-auth library...
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.CALLBACK_URL}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? 'You are logged in contact us page' : 'logged out',
    },
  };
}
