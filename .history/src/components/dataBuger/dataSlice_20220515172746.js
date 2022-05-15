import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [
    {
      food: salad,
      value: 10,
      image: '<div className="h-3 bg-green-500 w-[500px] rounded-full"></div>',
    },
    {
      food: cheese,
      value: 10,
      image:
        ' <div className="h-5 bg-yellow-500 w-[470px] rounded-full"></div>',
    },
    {
      food: breef,
      value: 10,
      image: '<div className="h-10 bg-[#800000] w-[400px] rounded-xl"></div>',
    },
  ],
});
