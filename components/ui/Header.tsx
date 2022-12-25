import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[75px] bg-brand-secondary w-screen top-11">
      <Link href="/" className="max-w-[1232px] h-full mx-auto flex item-center">
        <Image src="/images/bring-hover.svg" width={60} height={27} alt="bring logo" />
      </Link>
    </header>
  );
}
