import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RootState, getState, subscribe } from './store';

const initialState = getState();
const Context = createContext<RootState | null>(null);

export function Provider({ children }: PropsWithChildren<any>) {
  const [state, setState] = useState<RootState>(initialState);

  useEffect(() => {
    const unsubscribe = subscribe((state) => setState(state));

    return () => {
      unsubscribe();
    };
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useStore<R>(f: (state: RootState) => R): R {
  const state = useContext(Context);

  if (state === null) {
    throw new Error(`Component must be wrapped by ${Provider.name}`);
  }

  return f(state);
}
