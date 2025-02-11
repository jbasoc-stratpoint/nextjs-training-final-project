import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostCard from '../components/Post/Card/PostCard';
import { Spinner } from '../components/Spinner';
import { sanityClient } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
  imageUrl?: string;
}
const Home = ({ posts, imageUrl }: Props) => {
  return (
    <div className="mx-auto max-w-7xl min-h-screen">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {posts ? (
        <div>
          <div className="p-5">
            <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-5 lg:py-0">
              <div className="space-y-5 px-10">
                <h1 className="max-w-xl font-serif text-6xl">
                  <span className="underline decoration-black decoration-4">
                    Medium
                  </span>{' '}
                  is a place to write, read, and connect
                </h1>
                <h2>
                  It&apos;s easy and free to post your thinking on any topic and
                  connect with millions of readers
                </h2>
              </div>
              <div className="w-2xl h-2xl relative">
                <Image
                  src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard post={post} imageUrl={imageUrl} key={post._id} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <div className="m-auto" />
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
_id,
title,
  slug,
  author -> {
  name,
image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
