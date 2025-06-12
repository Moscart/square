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
    addCustomer: (state, action: PayloadAction<CustomerItem>) => {
      const newItem: CustomerItem = {
        id: nanoid(),
        name: action.payload.name,
        level: action.payload.level,
        favorite_menu: action.payload.favorite_menu,
        total_transaction: action.payload.total_transaction,
      };
      state.items.push(newItem);
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;

export default customerSlice.reducer;
