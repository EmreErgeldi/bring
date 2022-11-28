import Image from "next/image";

export default function BringLogo() {
  return (
    <div className="gap-y-10 flex-col hidden sm:flex">
      <Image
        src="/images/bring-bimutluluk.svg"
        alt="Bring Bi Mutluluk"
        width={180}
        height={180}
        className="m-4"
        blurDataURL="data:..."
        placeholder="blur"
      />
      <h3 className="text-4xl font-semibold tracking-tighter text-white">
        At your door in <br /> minutes
      </h3>
    </div>
  );
}
