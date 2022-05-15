import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataFood: [
      {
        nameFood: "Salad",
        value: 0,
        img: "h-3 bg-green-500 w-[500px] rounded-full",
      },
      {
        nameFood: "Cheese",
        value: 0,
        img: "h-5 bg-yellow-500 w-[470px] rounded-full",
      },
      {
        nameFood: "Beef",
        value: 0,
        img: "h-10 bg-[#800000] w-[400px] rounded-xl",
      },
    ],
    renderFood: [],
  },
  reducers: {
    add: (state, action) => {
      state.renderFood.push(action.payload.img);
      const indexFoodAdd = state.dataFood.findIndex(
        (item) => item.nameFood === action.payload.nameFood
      );
      state.dataFood[indexFoodAdd].value += 10;
    },
    abstract: (state, action) => {
      return state;
    },
  },
});
