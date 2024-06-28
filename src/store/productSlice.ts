 
import { createSlice } from '@reduxjs/toolkit';


interface PayloadAction {
  payload: {
    id: number;
  name: string;
  price: number;}
}
interface ProductState {
  products: Array<{ id: number, name: string, price: number }>;
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state: ProductState, action: PayloadAction) => {
      state.products.push(action.payload);
    },
    removeProduct: (state: ProductState, action: PayloadAction) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      ); 

    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
