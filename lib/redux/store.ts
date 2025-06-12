import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customer/customerSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      customer: customerReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
