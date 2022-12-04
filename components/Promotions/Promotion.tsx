import Image from "next/image";
import Title from "../ui/Title";

export default function Promotion() {
  return (
    <div className="container mx-auto md:pt-8 xl:max-w-[1232px]">
      <div className="hidden md:block">
        <Title>Promotions</Title>
      </div>
      <div className="md:-mx-2">
        <div className="block md:px-2">
          <Image
            src="/images/promotion-1.jpeg"
            width={400}
            height={200}
            className="md:rounded-lg"
            alt="promotion image"
          />
        </div>
      </div>
    </div>
  );
}
