import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { customerData } from "./dummyData";

export type CustomerLevel = "warga" | "juragan" | "sultan" | "konglomerat";

export interface CustomerItem {
  id: string;
  name: string;
  level: CustomerLevel;
  favorite_menu: string;
  total_transaction: number;
}

interface CustomerState {
  items: CustomerItem[];
}

const initialState: CustomerState = {
  items: customerData,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<string>) => {
      // const newItem: CustomerItem = {
      //   id: nanoid(),
      //   name: action.payload,
      // };
      // state.items.push(newItem);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
