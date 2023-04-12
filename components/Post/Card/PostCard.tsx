import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../sanity';
import { Post } from '../../../typings';

interface Props {
  post: Post;
  imageUrl?: string;
}

function PostCard({ post, imageUrl }: Props) {
  return (
    <>
      <Link key={post._id} href={`/post/${post.slug.current}`}>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          {post.mainImage && (
            <Image
              className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={imageUrl || urlFor(post.mainImage).url()!}
              alt=""
              width={240}
              height={70}
            />
          )}

          <div className="flex justify-between bg-white p-5">
            <div>
              <p className="text-lg font-bold">{post.title}</p>
              <p className="text-xs">
                {post.description} by {post.author.name}
              </p>
            </div>
            {post.author.image && (
              <Image
                className="h-12 w-12 rounded-full"
                src={imageUrl || urlFor(post.author.image).url()!}
                alt=""
                width={48}
                height={48}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
