import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataFood: [
      {
        nameFood: "Salad",
        value: 0,
        img: '<div className="h-3 bg-green-500 w-[500px] rounded-full"></div>',
      },
      {
        nameFood: "Cheese",
        value: 0,
        img: ' <div className="h-5 bg-yellow-500 w-[470px] rounded-full"></div>',
      },
      {
        nameFood: "Beef",
        value: 0,
        img: '<div className="h-10 bg-[#800000] w-[400px] rounded-xl"></div>',
      },
    ],
    renderFood: [],
  },
  reducers: {
    add: (state, action) => {
      return state;
    },
    abstract: (state, action) => {
      console.log(action.payload);
      return state;
    },
  },
});
