
import './App.css'
import { counterStore } from './store/conterStore.js'

function App() {
  const { count, increment, decrement } = counterStore();

  return (
    <div className="card">
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App
