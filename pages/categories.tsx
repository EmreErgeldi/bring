import Image from "next/image";
import Navbar from "../components/Navbar";
import ThreeCard from "../components/ThreeCard/ThreeCard";

export default function categories() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[75px] bg-brand-secondary flex ">
        <Image
          src="/images/bring-hover.svg"
          alt="bring logo"
          width={55}
          height={26}
          className="flex items-center justify-center ml-[7rem]"
        />
      </div>
      <ThreeCard />
    </div>
  );
}
