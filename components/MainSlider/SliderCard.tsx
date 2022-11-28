import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import BringLogo from "./BringLogo";
import Slider from "./Slider";

export default function SliderCard() {
  const [selected, setSelected] = useState("TR");
  const flags = {
    US: "+1",
    GB: "+5",
    FR: "+70",
    DE: "+30",
    IT: "+11",
    TR: "+90",
  };

  return (
    <div className="h-auto sm:h-[500px] relative before:bg-gradient-to-r before:from-brand-secondary before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider />
      <div className="relative sm:absolute inset-0 px-0 sm:px-8 z-[40] flex items-center">
        <div className="sm:container lg:max-w-[1275px] flex mx-auto justify-between items-center">
          <div className="gap-y-10 flex-col hidden sm:flex">
            <BringLogo />
          </div>
          <div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
            <h3 className="text-center mb-4 font-semibold text-brand-secondary">
              Login or Register
            </h3>
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
                  />
                  <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-brand-secondary peer-valid:h-7 peer-valid:text-xs peer-valid:text-brand-secondary">
                    Mobile Phone
                  </span>
                </label>
              </div>
              <button className="h-12 rounded-lg transition-colors bg-brand-yellow text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-brand-yellow">
                Continue with phone number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
