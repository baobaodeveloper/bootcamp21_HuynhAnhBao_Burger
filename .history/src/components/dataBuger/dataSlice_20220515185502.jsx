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
      state.renderFood.unshift(action.payload.img);
      const indexFoodAdd = state.dataFood.findIndex(
        (item) => item.nameFood === action.payload.nameFood
      );
      state.dataFood[indexFoodAdd].value += 10;
    },
    abstract: (state, action) => {
      if (action.payload.value > 0) {
        const indexFoodAstract = state.renderFood.lastIndexOf(
          action.payload.img
        );
        state.renderFood.splice(indexFoodAstract, 1);
        const indexFoodValue = state.dataFood.indexOf(
          (item) => item.nameFood === action.payload.nameFood
        );
        console.log(indexFoodAstract);
        state.dataFood[indexFoodValue].value -= 10;
      }
    },
  },
});
