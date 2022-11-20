import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";

export default function SliderCard() {
  return (
    <div className="min-w-[400px] rounded-md bg-slate-50 p-6 z-50">
      <h1 className="text-brand-primary text-center font-medium mb-3 text-[17px]">
        Login or register
      </h1>
      <div className="flex">
        <div className="border-2 rounded-sm max-w-[109px] min-h-[56px] flex p-3 justify-center items-center m-1">
          <Image
            src="/images/Turkey (TR).svg"
            alt="Turkey flag"
            width={16}
            height={11}
            className="m-1"
          />
          +90
          <KeyboardArrowDownIcon className="ml-2" />
        </div>
        <div className="rounded-sm max-h-[56px] flex justify-center items-center m-1 text-brand-primary">
          <TextField fullWidth label="Mobile Phone" id="fullWidth" />
        </div>
      </div>
      <button
        type="submit"
        className="rounded-md bg-brand-yellow font-medium p-4 w-full text-brand-primary "
      >
        Continue with phone number
      </button>
    </div>
  );
}
