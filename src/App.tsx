import { useState } from 'react';

import './App.css';
import './app-base.css';

import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Playground</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> to play in this playground.
        </p>
        <Button
          onPress={() => setCount((count) => count + 1)}
        >
          Bonterra Button count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
