import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

function Item(props: {
  item: {
    path: string;
  };
}) {
  return (
    <div className="bg-center bg-no-repeat -translate-y-20">
      <Image src={props.item.path} alt="slide show" width={1920} height={500} />
    </div>
  );
}

export default function Slider() {
  const items = [
    {
      path: "/images/bring-mainpage-1.jpg",
    },
    {
      path: "/images/bring-mainpage-2.jpg",
    },
    {
      path: "/images/bring-mainpage-3.jpg",
    },
    {
      path: "/images/bring-mainpage-4.jpg",
    },
  ];

  return (
    <Carousel
      duration={500}
      indicators={false}
      animation="slide"
      className="h-full hidden sm:block"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
