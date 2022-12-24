import Image from "next/image";
import { useState, useEffect } from "react";

export default function Cards() {
  const cards = [
    {
      id: 1,
      image: "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
      title: "A promotion for every order",
      description: "At Getir, you can find a promotion for every order.",
    },
    {
      id: 2,
      image: "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
      title: "At your door in minutes",
      description: "Your order is at your door in minutes with Getir.",
    },
    {
      id: 3,
      image: "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
      title: "Thousand kinds of happiness",
      description: "At Getir, you can choose from thousands of varieties.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 my-10">
      {cards.length &&
        cards.map((card, i) => (
          <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center" key={i}>
            <Image width={150} height={150} alt="card images" className="mb-6" src={card.image} />
            <h6 className="font-semibold text-lg text-brand-primary">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}
