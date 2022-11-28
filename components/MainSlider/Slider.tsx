import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

function Item(props: {
  item: {
    path: string;
  };
}) {
  return (
    <div>
      <Image
        src={props.item.path}
        alt="slide show"
        width={1920}
        height={200}
        className="h-[500px] bg-center bg-no-repeat bg-cover scale-[1.15] translate-y-4"
      />
    </div>
  );
}

export default function Slider() {
  var items = [
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
    <Carousel className="h-full hidden sm:block">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
