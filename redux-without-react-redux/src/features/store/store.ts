import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export function subscribe(f: (state: RootState) => void) {
  return store.subscribe(() => {
    const state = store.getState();
    f(state);
  });
}

export const getState = store.getState;
export const dispatch = store.dispatch;
