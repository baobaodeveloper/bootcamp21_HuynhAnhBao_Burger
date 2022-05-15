import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataQualityFoodSelector,
  dataRenderFoodSelector,
} from "../../redux/selector";
import { dataSlice } from "./dataSlice";

export default function Burger() {
  const dataRenderFood = useSelector(dataRenderFoodSelector);
  const dataQtyFood = useSelector(dataQualityFoodSelector);
  const dispatch = useDispatch();

  const hanleAddFood = (food) => {
    dispatch(dataSlice.actions.add(food));
  };
  const handleAstractFood = (food) => {
    dispatch(dataSlice.actions.abstract(food));
  };

  return (
    <div>
      <div className="flex items-center gap-x-40  w-screen h-screen mx-auto justify-center">
        <div className="flex flex-col justify-center items-center gap-y-2 w-[400px]">
          <h2 className="mb-20">Store Burger</h2>
          <div className="bg-[#D2691E] w-full h-[30px] relative">
            <div className="bg-[#D2691E] w-full h-[60px] absolute top-0 left-0 -translate-y-[60px] rounded-tl-full rounded-tr-full"></div>
          </div>
          {dataRenderFood.length === 0 && (
            <p className="rounded-t-none text-slate-700 text-xl font-semibold">
              Choose food
            </p>
          )}

          {dataRenderFood.length > 0 &&
            dataRenderFood.map((item, i) => (
              <div className={item} key={i}></div>
            ))}
          {/* <div className="h-3 bg-green-500 w-[500px] rounded-full"></div>
          <div className="h-5 bg-yellow-500 w-[470px] rounded-full"></div>
          <div className="h-10 bg-[#800000] w-[400px] rounded-xl"></div> */}

          <div className="w-full bg-[#D2691E] h-[90px] rounded-br-3xl rounded-bl-3xl"></div>
        </div>

        <div className="">
          <table className="table">
            <thead>
              <tr className="border-t-0">
                <td className="text-blue-700 text-2xl font-semibold border-t-0">
                  Choose Food
                </td>
              </tr>
              <tr>
                <th scope="col">Food</th>
                <th scope="col"></th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {dataQtyFood.map((food, i) => (
                <tr key={i}>
                  <td className="h-[40x] leading-[40px] text-center">
                    {food.nameFood}
                  </td>
                  <td className="flex items-center gap-x-3">
                    <button
                      onClick={() => hanleAddFood(food)}
                      className="w-8 h-8 flex items-center justify-center text-white leading-none rounded-md bg-green-500 focus:outline-none hover:scale-105 transition-all"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleAstractFood(food)}
                      className="w-8 h-8 flex items-center justify-center text-white leading-none rounded-md bg-red-500 focus:outline-none hover:scale-105 transition-all"
                    >
                      -
                    </button>
                  </td>
                  <td className="h-[40x] text-center leading-[40px]">
                    {food.value}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}></td>
                <td>
                  Total:{" "}
                  {dataQtyFood.reduce((acc, item) => acc + item.value, 0)}
                </td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td>
                  <button className="py-2 px-3 rounded-lg bg-blue-400 font-semibold text-white uppercase  focus:outline-none hover:scale-105 transition-all">
                    Pay
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
