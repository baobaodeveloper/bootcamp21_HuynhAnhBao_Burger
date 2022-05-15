import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [
    {
      food: salad,
      value: 10,
      image: '<div className="h-3 bg-green-500 w-[500px] rounded-full"></div>',
    },
  ],
});
