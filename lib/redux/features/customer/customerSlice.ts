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
      const { name, level, favorite_menu, total_transaction } = action.payload; // Ambil ID dan nama baru dari permintaan
      const newItem: CustomerItem = {
        id: nanoid(),
        name: name,
        level: level,
        favorite_menu: favorite_menu,
        total_transaction: total_transaction,
      };
      state.items.push(newItem);
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCustomer: (state, action: PayloadAction<CustomerItem>) => {
      const { id, name, level, favorite_menu, total_transaction } =
        action.payload;
      const customerToEdit = state.items.find((item) => item.id === id);
      if (customerToEdit) {
        customerToEdit.name = name;
        customerToEdit.level = level;
        customerToEdit.favorite_menu = favorite_menu;
        customerToEdit.total_transaction = total_transaction;
      }
    },
  },
});

export const { addCustomer, deleteCustomer, updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
