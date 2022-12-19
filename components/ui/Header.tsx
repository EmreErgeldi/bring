import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[75px] bg-brand-secondary w-screen top-11">
      <div className="max-w-[1232px] h-full mx-auto flex item-center">
        <Image src="/images/bring-hover.svg" width={60} height={27} alt="bring logo" />
      </div>
    </header>
  );
}
