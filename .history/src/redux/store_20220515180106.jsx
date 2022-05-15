import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../components/dataBuger/dataSlice";

export const store = configureStore({
  reducer: {
    dataShow: dataSlice.reducer,
  },
});
