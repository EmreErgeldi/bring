import React, { useEffect, useState } from "react";
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

export default function Silaydir() {
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

  const [activeImage, setActiveImage] = React.useState(0);
  const [activeImage2, setActiveImage2] = React.useState(1);
  const [opacity, setOpacity] = React.useState("opacity-100 transition-all duration-1000 ease-in-out");
  const [opacity2, setOpacity2] = React.useState("opacity-0 transition-all duration-1000 ease-in-out");

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity("opacity-0 transition-all duration-1000 ease-in-out");
      setOpacity2("opacity-100 transition-all duration-1000 ease-in-out");
      setTimeout(() => setOpacity("opacity-100 transition-all duration-1000 ease-in-out"), 2000);
      setTimeout(() => setOpacity2("opacity-0 transition-all duration-1000 ease-in-out"), 2000);
      setActiveImage((activeImage) => (activeImage + 1) % items.length);
      setActiveImage2((activeImage) => (activeImage + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    console.log(activeImage + " " + activeImage2);
  });

  return (
    <>
      <div className={opacity}>
        <Image
          src={`/images/bring-mainpage-${activeImage}.jpg`}
          objectFit="cover"
          alt="slide show"
          fill={true}
          className="h-full relative"
        />
      </div>
      <div className={opacity2}>
        <Image
          src={`/images/bring-mainpage-${activeImage2}.jpg`}
          objectFit="cover"
          alt="slide show"
          fill={true}
          className="h-full relative"
        />
      </div>
    </>
  );
}
