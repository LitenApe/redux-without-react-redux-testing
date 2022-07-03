import {
  decrement as decrementCounter,
  increment as incrementCounter,
  setValue as setCounterValue,
} from './slice';

import { dispatch } from '../store';

export function increment() {
  dispatch(incrementCounter());
}

export function double() {
  dispatch(({ counter: { value } }) => {
    dispatch(setCounterValue(value * 2));
  });
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
    dispatch(setCounterValue(0));
  });
}
