import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../components/dataBuger/dataSlice";
import {} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dataShow: dataSlice.reducer,
  },
});
