import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-8">
        <h1 className="text-xs md:text-lg uppercase">
          <Link href="/">Photographer</Link>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
