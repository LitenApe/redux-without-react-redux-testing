import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { value: number } = {
  value: 0,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, setValue, decrement, reset } = slice.actions;
export const reducer = slice.reducer;
