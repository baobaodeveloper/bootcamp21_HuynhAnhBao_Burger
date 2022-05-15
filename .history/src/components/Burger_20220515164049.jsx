import React from "react";

export default function Burger() {
  return (
    <div>
      <div className="flex items-center gap-x-5 w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="bg-[#D2691E] w-[400px] h-[30px] relative">
            <div className="bg-[#D2691E] w-[400px] h-[60px] absolute top-0 left-0 -translate-y-[60px] rounded-tl-full rounded-tr-full"></div>
          </div>

          <div className="w-[400px] bg-[#D2691E] h-[90px] rounded-br-lg rounded-bl-lg"></div>
        </div>
      </div>
    </div>
  );
}
