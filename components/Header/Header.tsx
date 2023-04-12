import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const navList = require('../NavBar/navList.json');

function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <>
      <header className="mx-auto flex max-w-7xl justify-between p-5 ">
        <div className="flex items-center space-x-5">
          <Logo />
          <NavBar list={navList} />
        </div>
        <div
          className={`flex items-center space-x-5 text-green-600 ${
            !session && loading
              ? 'delay-10 opacity-0 transition-all ease-in'
              : 'opacity-1 delay-10	transition-all ease-in'
          }`}
        >
          {!loading && !session && (
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <h3>Sign In</h3>
            </Link>
          )}
          {session && (
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                signOut({
                  callbackUrl: `${window.location.origin}`,
                });
              }}
            >
              <h3>Sign out</h3>
            </Link>
          )}

          <h3 className="rounded-full border px-4 py-1">Get Started</h3>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl justify-between p-5 ">
        <span>{session ? `Welcome, ${session.user?.name}` : ''}</span>
      </div>
    </>
  );
}

export default Header;
