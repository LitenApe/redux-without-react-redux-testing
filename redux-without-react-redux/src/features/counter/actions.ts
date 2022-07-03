import {
  decrement as decrementCounter,
  increment as incrementCounter,
  reset as resetCounter,
} from './slice';

import { dispatch } from '../store';

export function increment() {
  dispatch(incrementCounter());
}

export function decrement() {
  dispatch(decrementCounter());
}

function sleep(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export function reset() {
  sleep().then(() => {
    dispatch(resetCounter());
  });
}
