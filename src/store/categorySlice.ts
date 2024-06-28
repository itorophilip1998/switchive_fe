 
import { createSlice } from '@reduxjs/toolkit';

interface PayloadAction {
  payload: {
    id: number;
    name: string; 
  };
}

interface CategoryState {
  categories: Array<{ id: number, name: string }>;
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state: CategoryState, action: PayloadAction) => {
      state.categories.push(action.payload);
    },
    
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
