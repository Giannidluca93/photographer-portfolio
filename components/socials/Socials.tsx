import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="w-full flex items-end justify-center space-x-6 md:space-x-4">
      <Link href="/">
        <Image src="/facebook.svg" alt="facebook logo" height={25} width={25} />
      </Link>
      <Link href="/">
        <Image
          src="/instagram.svg"
          alt="instagram logo"
          height={25}
          width={25}
        />
      </Link>
      <Link href="/">
        <Image src="/twitter.svg" alt="twitter logo" height={25} width={25} />
      </Link>
      <Link href="/">
        <Image src="/email.svg" alt="email logo" height={25} width={25} />
      </Link>
      <Link href="/about" className="text-xs/[10px] bg-black text-white p-0.5">
        About me
      </Link>
    </div>
  );
};

export default Socials;
