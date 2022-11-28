import Image from "next/image";

export default function threeCard() {
  return (
    <div>
      <Image
        src="/images/ThreeCard1.jpeg"
        alt="bring-image1"
        width={400}
        height={200}
        className="rounded-lg"
      />
    </div>
  );
}
