import React from "react";

export default function Burger() {
  return (
    <div>
      <div className="flex items-center gap-x-5 w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#D2691E] w-[400px] h-[60px] relative">
            <div className="bg-[#D2691E] w-[400px] h-[40px] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
