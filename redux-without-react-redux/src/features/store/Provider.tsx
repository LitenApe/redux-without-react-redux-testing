import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RootState, store as root } from './store';

const initialState = root.getState();
const Context = createContext<RootState | null>(null);

export function Provider({ children }: PropsWithChildren<any>) {
  const [state, setState] = useState<RootState>(initialState);

  useEffect(() => {
    root.subscribe(() => {
      setState(root.getState());
    });
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useStore(): RootState {
  const reducState = useContext(Context);

  if (reducState === null) {
    throw new Error(`Component must be wrapped by ${Provider.name}`);
  }

  return reducState;
}
