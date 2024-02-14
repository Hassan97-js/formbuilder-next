import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-base font-bold gap-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-transparent bg-clip-text">
      <Image src="/logo.svg" width={24} height={24} priority alt="" />
      <span className="mt-[3px]">Formify</span>
    </Link>
  );
}

export default Logo;
