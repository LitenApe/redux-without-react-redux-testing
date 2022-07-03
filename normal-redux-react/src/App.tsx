import { decrement, increment, reset } from './feature/counter';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './feature/store';

function App() {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Basic Redux Counter</h1>
      <p>The value of counter is currently: {value} </p>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => setTimeout(() => dispatch(reset()), 1000)}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
