/* eslint-disable no-param-reassign */
/* eslint-disable no-duplicate-imports */
// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  isOpen: boolean;
}

const initialState: CounterState = {
  isOpen: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleToggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('>>>>>>');
      state.isOpen = !state.isOpen;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { handleToggle } = counterSlice.actions;

export default counterSlice.reducer;
