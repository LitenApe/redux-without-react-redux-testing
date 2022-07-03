import { PayloadAction, configureStore } from '@reduxjs/toolkit';

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

export function dispatch<Payload>(
  f: PayloadAction<Payload> | ((state: RootState) => void),
) {
  const state = store.getState();

  if (typeof f === 'function') {
    return f(state);
  }

  return store.dispatch(f);
}

export const getState = store.getState;
