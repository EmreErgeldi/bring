import Image from "next/image";
import BringLogo from "./BringLogo";
import SliderCard from "./SliderCard";

export default function Container() {
  return (
    <section className="relative">
      <div className=" bg-gradient-to-r from-brand-secondary to-transparent opacity-100 min-h-[500px] w-[100%] absolute">
        <div className="grid grid-cols-12 h-[500px]">
          <div className="bg-transparent col-start-2 col-end-12 flex justify-between items-center px-[10rem]">
            <SliderCard />
          </div>
        </div>
      </div>
    </section>
  );
}
