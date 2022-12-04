import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

function Item(props: {
  item: {
    path: string;
  };
}) {
  return (
    <div className="bg-center bg-no-repeat h-full">
      <Image
        src={props.item.path}
        alt="slide show"
        width={1920}
        height={500}
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
}

export default function Slider() {
  const items = [
    {
      path: "/images/bring-mainpage-0.jpg",
    },
    {
      path: "/images/bring-mainpage-1.jpg",
    },
    {
      path: "/images/bring-mainpage-2.jpg",
    },
    {
      path: "/images/bring-mainpage-3.jpg",
    },
  ];

  return (
    <Carousel duration={350} interval={3000} indicators={false} animation="slide" className="h-full hidden sm:block">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
