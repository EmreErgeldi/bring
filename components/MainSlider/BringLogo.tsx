//import Image from "next/image";

export default function BringLogo() {
  return (
    <div className="my-auto z-50">
      <img
        src="/images/bring-bimutluluk.svg"
        alt="Bring Bi Mutluluk"
        width={180}
        height={180}
        className="m-4"
      />
      <div className="h-3" />
      <h1 className="m-4 text-4xl text-white max-w-[300px] font-bold">
        At your door in minutes
      </h1>
    </div>
  );
}
