import { useState } from 'react';

import Button from './components/Button';
import Timer from './components/Timer';

function App() {
  return (
    <main className="global centered">
      <div className="container column">
        <span className="title">Interval Timer</span>
        <Timer duration={5} />
        <div className="button-container">
          <Button title="Start" onClick={() => console.log('start clicked')} />
          <Button title="Pause" onClick={() => console.log('stop clicked')} />
        </div>
      </div>
    </main>
  );
}

export default App;
