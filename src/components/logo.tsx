import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-base font-bold gap-[0.375rem]">
      <Image
        src="/logo.svg"
        width={20}
        height={20}
        priority
        alt=""
      />
      <span className="mt-[1.5px] text-sm tracking-wider">Formify</span>
    </Link>
  );
}

export default Logo;
