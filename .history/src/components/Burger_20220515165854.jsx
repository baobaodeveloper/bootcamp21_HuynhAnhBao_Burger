import React from "react";

export default function Burger() {
  return (
    <div>
      <div className="flex items-center gap-x-20  w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center gap-y-2 w-[400px]">
          <h2 className="mb-20">Store Burger</h2>
          <div className="bg-[#D2691E] w-full h-[30px] relative">
            <div className="bg-[#D2691E] w-full h-[60px] absolute top-0 left-0 -translate-y-[60px] rounded-tl-full rounded-tr-full"></div>
          </div>
          <p>Choose food</p>
          {/* loop here */}
          <div className="h-3 bg-green-500 w-[500px] rounded-full"></div>
          <div className="h-5 bg-yellow-500 w-[470px] rounded-full"></div>
          <div className="h-10 bg-[#800000] w-[400px] rounded-xl"></div>

          <div className="w-full bg-[#D2691E] h-[90px] rounded-br-3xl rounded-bl-3xl"></div>
        </div>

        <div className="">
          <h2>Choose Food</h2>
          <div className="flex items-center">
            <div>
              <span>Food</span>
              <span>Salad</span>
              <span>Cheese</span>
              <span>Beef</span>
            </div>
            <div>
              <span></span>
              <span>
                <button className="p-2 bg-green-500 text-white">+</button>
                <button className="p-2 bg-red-500 text-white">-</button>
              </span>
              <span>Cheese</span>
              <span>Beef</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
