import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
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
      return <h2>loading...</h2>;
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
