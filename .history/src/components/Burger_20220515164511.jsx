import React from "react";

export default function Burger() {
  return (
    <div>
      <div className="flex items-center gap-x-5 w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center gap-y-4 w-[400px]">
          <div className="bg-[#D2691E] w-full h-[30px] relative">
            <div className="bg-[#D2691E] w-full h-[60px] absolute top-0 left-0 -translate-y-[60px] rounded-tl-full rounded-tr-full"></div>
          </div>
          <p>Choose food</p>
          {/* loop here */}
          <div className="h-2 bg-green-500 max-w-[600px]"></div>

          <div className="w-full bg-[#D2691E] h-[90px] rounded-br-3xl rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
}
