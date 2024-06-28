 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  categories: Array<{ id: number, name: string }>;
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<{ id: number, name: string }>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
