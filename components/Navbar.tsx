import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Dialog } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LanguageIcon from "@mui/icons-material/Language";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../pages";
import { admins, customers } from "@prisma/client";
import { useRouter } from "next/router";
import { isAdminAtom, isEditAtom } from "../lib/atoms";
import { useAtom } from "jotai";

export default function Navbar({ admins, customers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [bring, setBring] = useState(true);
  const [open, setOpen] = useState(false);
  const [bringfood, setBringFood] = useState(false);
  const [bringmore, setBringMore] = useState(false);
  const [bringwater, setBringWater] = useState(false);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("TR");
  const [isAdmin, setIsAdmin] = useAtom(isAdminAtom);

  const router = useRouter();

  const flags = {
    US: "+1",
    GB: "+5",
    FR: "+70",
    DE: "+30",
    IT: "+11",
    TR: "+90",
  };

  const bringElement = useRef<HTMLLIElement>(null);
  const bringfoodElement = useRef<HTMLLIElement>(null);
  const bringmoreElement = useRef<HTMLLIElement>(null);
  const bringwaterElement = useRef<HTMLLIElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    admins?.forEach((element: admins) => {
      if (element.phone_number == value) {
        setIsAdmin(true);
      }
    });
    customers?.forEach((element: customers) => {
      if (element.phone_number == value) {
        setIsAdmin(false);
      }
    });
    console.log(value, admins, customers);
  };

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
    router.push("/");
  };
  return (
    <div className="w-screen h-11 bg-brand-primary font-brandMedium px-8 z-20 sticky top-0">
      <div className="w-[100%] max-w-[1232px] mx-auto h-12 flex justify-between">
        <ul className="flex">
          <li
            className="py-3 px-5 mr-0.5 self-center bg-brand-secondary hover:bg-brand-secondary rounded-md rounded-b-none cursor-pointer"
            onClick={handleBring}
            ref={bringElement}
          >
            {bring ? (
              <Image src="/images/bring-hover.svg" alt="Bring logo" width={38} height={16} />
            ) : (
              <Image src="/images/bring.svg" alt="Bring logo" width={38} height={16} />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleFood}
            ref={bringfoodElement}
          >
            {bringfood ? (
              <Image src="/images/bringfood-hover.svg" alt="Bringfood logo" width={70} height={16} />
            ) : (
              <Image src="/images/bringfood.svg" alt="Bringfood logo" width={70} height={16} />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleMore}
            ref={bringmoreElement}
          >
            {bringmore ? (
              <Image src="/images/bringmore-hover.svg" alt="Bring-it logo" width={75} height={16} />
            ) : (
              <Image src="/images/bringmore.svg" alt="Bringfood logo" width={75} height={16} />
            )}
          </li>
          <li
            className="py-3 px-5 mr-0.5 self-center hover:bg-brand-secondary rounded-md rounded-b-none"
            onClick={handleWater}
            ref={bringwaterElement}
          >
            {bringwater ? (
              <Image src="/images/bringwater-hover.svg" alt="Bring-it logo" width={75} height={16} />
            ) : (
              <Image src="/images/bringwater.svg" alt="Bringfood logo" width={75} height={16} />
            )}
          </li>
        </ul>

        <ul className="flex text-brand-gray text-sm ">
          <li className="py-3 px-5 self-center hover:cursor-pointer">
            <LanguageIcon className="m-1" />
            <span>English(EN)</span>
          </li>
          <li className="py-3 px-5 self-center hover:cursor-pointer" onClick={handleClickOpen}>
            <PersonIcon className="m-1" />
            <span>Login</span>
          </li>
          <li className="py-3 px-5 self-center hover:cursor-pointer">
            <PersonAddAlt1Icon className="m-1" />
            <span className="">Sign Up</span>
          </li>
        </ul>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
          <h3 className="text-center mb-4 font-semibold text-brand-secondary">Login or Register</h3>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-3">
              <ReactFlagsSelect
                countries={Object.keys(flags)}
                customLabels={flags}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="!p-0"
              />
              <label className="relative flex-1 group cursor-text">
                <input
                  required
                  className="h-full rounded px-4 pt-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"
                  onChange={(e) => setValue(e.target.value)}
                />
                <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-brand-secondary peer-valid:h-7 peer-valid:text-xs peer-valid:text-brand-secondary">
                  Mobile Phone
                </span>
              </label>
            </div>
            <button
              className="h-12 rounded-lg transition-colors bg-brand-yellow text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-brand-yellow"
              onClick={() => {
                handleClose(value);
              }}
            >
              Continue with phone number
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
