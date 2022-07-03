import { decrement, increment, reset } from './features/counter';

import { useStore } from './features/store';

function App() {
  const {
    counter: { value },
  } = useStore();

  return (
    <div className="App">
      <h1>Basic Redux Counter</h1>
      <p>The value of counter is currently: {value} </p>
      <div>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
}

export default App;
