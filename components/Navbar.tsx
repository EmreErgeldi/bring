//import Image from "next/image";
import { useRef, useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LanguageIcon from "@mui/icons-material/Language";

export default function Navbar() {
  const [bring, setBring] = useState(true);
  const [bringfood, setBringFood] = useState(false);
  const [bringmore, setBringMore] = useState(false);
  const [bringwater, setBringWater] = useState(false);

  const bringElement = useRef<HTMLLIElement>(null);
  const bringfoodElement = useRef<HTMLLIElement>(null);
  const bringmoreElement = useRef<HTMLLIElement>(null);
  const bringwaterElement = useRef<HTMLLIElement>(null);

  const handleFood = () => {
    setBringFood(true);
    setBringMore(false);
    setBring(false);
    setBringWater(false);
    bringfoodElement.current?.classList.add("bg-brand-secondary");
    bringElement.current?.classList.remove("bg-brand-secondary");
    bringmoreElement.current?.classList.remove("bg-brand-secondary");
    bringwaterElement.current?.classList.remove("bg-brand-secondary");
  };
  const handleMore = () => {
    setBringFood(false);
    setBringMore(true);
    setBring(false);
    setBringWater(false);
    bringfoodElement.current?.classList.remove("bg-brand-secondary");
    bringElement.current?.classList.remove("bg-brand-secondary");
    bringwaterElement.current?.classList.remove("bg-brand-secondary");
    bringmoreElement.current?.classList.add("bg-brand-secondary");
  };
  const handleWater = () => {
    setBringFood(false);
    setBringMore(false);
    setBring(false);
    setBringWater(true);
    bringfoodElement.current?.classList.remove("bg-brand-secondary");
    bringElement.current?.classList.remove("bg-brand-secondary");
    bringmoreElement.current?.classList.remove("bg-brand-secondary");
    bringwaterElement.current?.classList.add("bg-brand-secondary");
  };
  const handleBring = () => {
    setBringFood(false);
    setBringMore(false);
    setBring(true);
    setBringWater(false);
    bringfoodElement.current?.classList.remove("bg-brand-secondary");
    bringElement.current?.classList.add("bg-brand-secondary");
    bringmoreElement.current?.classList.remove("bg-brand-secondary");
    bringwaterElement.current?.classList.remove("bg-brand-secondary");
  };
  return (
    <div className="w-screen h-11 bg-brand-primary font-brandMedium px-8">
      <div className="w-[100%] max-w-[1232px] mx-auto h-12 flex justify-between">
        <ul className="flex">
          <li
            className="py-3 px-5 mr-0.5 self-center bg-brand-secondary hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleBring}
            ref={bringElement}
          >
            {bring ? (
              <img
                src="/images/bring-hover.svg"
                alt="Bring logo"
                width={38}
                height={16}
              />
            ) : (
              <img
                src="/images/bring.svg"
                alt="Bring logo"
                width={38}
                height={16}
              />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleFood}
            ref={bringfoodElement}
          >
            {bringfood ? (
              <img
                src="/images/bringfood-hover.svg"
                alt="Bringfood logo"
                width={70}
                height={16}
              />
            ) : (
              <img
                src="/images/bringfood.svg"
                alt="Bringfood logo"
                width={70}
                height={16}
              />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleMore}
            ref={bringmoreElement}
          >
            {bringmore ? (
              <img
                src="/images/bringmore-hover.svg"
                alt="Bring-it logo"
                width={75}
                height={16}
              />
            ) : (
              <img
                src="/images/bringmore.svg"
                alt="Bringfood logo"
                width={75}
                height={16}
              />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleWater}
            ref={bringwaterElement}
          >
            {bringwater ? (
              <img
                src="/images/bringwater-hover.svg"
                alt="Bring-it logo"
                width={75}
                height={16}
              />
            ) : (
              <img
                src="/images/bringwater.svg"
                alt="Bringfood logo"
                width={75}
                height={16}
              />
            )}
          </li>
        </ul>

        <ul className="flex text-brand-gray text-sm ">
          <li className="py-3 px-5 self-center hover:cursor-pointer">
            <LanguageIcon className="m-1" />
            <span>English(EN)</span>
          </li>
          <li className="py-3 px-5 self-center hover:cursor-pointer">
            <PersonIcon className="m-1" />
            <span>Login</span>
          </li>
          <li className="py-3 px-5 self-center hover:cursor-pointer">
            <PersonAddAlt1Icon className="m-1" />
            <span className="">Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
