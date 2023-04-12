import Link from 'next/link';

export interface navLink {
  id: number;
  category: string;
  url: string;
  title: string;
}

type menuItems = {
  list: Array<navLink>;
};

function NavBar({ list }: menuItems) {
  return (
    <>
      <div className="hidden items-center space-x-5 md:inline-flex">
        {list &&
          list.map((nav) => {
            if (nav.category === 'Link') {
              return (
                <Link key={nav.id} href={nav.url}>
                  <span>{nav.title}</span>
                </Link>
              );
            }
            if (nav.category === 'FullText') {
              return (
                <h3
                  key={nav.id}
                  className="rounded-full bg-green-600 px-4 py-1 text-white "
                >
                  {nav.title}
                </h3>
              );
            }
          })}
      </div>
    </>
  );
}

export default NavBar;
