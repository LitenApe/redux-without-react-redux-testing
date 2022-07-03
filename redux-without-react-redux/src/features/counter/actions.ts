import {
  decrement as decrementCounter,
  increment as incrementCounter,
  reset as resetCounter,
  setValue as setCounterValue,
} from './slice';
import { dispatch, store } from '../store';

export function increment() {
  dispatch(incrementCounter());
}

export function double() {
  const {
    counter: { value },
  } = store.getState();

  dispatch(setCounterValue(value * 2));
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
