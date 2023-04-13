import { getSession, signIn } from 'next-auth/react';
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

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
        } else {
          setLoading(false);
        }
      };
      securePage();
    }, []);
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
