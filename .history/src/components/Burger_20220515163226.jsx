import React from "react";

export default function Burger() {
  return (
    <div>
      <div className="flex items-center gap-x-5 w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#D2691E] w-[400px] h-[60px] relative">
            <div className="bg-[#000] w-[400px] h-[40px] absolute top-0 left-0 -translate-y-[40px] rounded-tl-full rounded-tr-full rounded-br-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
