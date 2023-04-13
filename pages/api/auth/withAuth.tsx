import { getSession, signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Post } from '../../../typings';

export interface Props {
  post: Post;
}

const withAuth = (Component: React.FunctionComponent<Props>) => {
  const AuthenticatedComponent = (props: Props) => {
    const [loading, setLoading] = useState(true);

    const { data: session, status } = useSession();
    console.log(session);
    console.log(status);

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();

        if (!session) {
          console.log('PASOK SA SIGN IN');
          signIn();
        } else {
          setLoading(false);
        }
      };

      if (status !== 'authenticated') {
        securePage();
      } else {
        setLoading(false);
      }
    }, [status]);

    if (loading) {
      return (
        <div className="mx-auto max-w-7xl flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="mx-auto max-w-7xl min-h-screen">
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

  return AuthenticatedComponent;
};

export default withAuth;
