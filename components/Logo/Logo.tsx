import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  width?: number;
  height?: number;
};

function Logo({ width = 176, height = 30 }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image
          className="cursor-pointer object-contain"
          src="/logo.png"
          alt=""
          width={width}
          height={height}
          priority={true}
        />
      </Link>
    </>
  );
}

export default Logo;
