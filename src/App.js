import { useState } from 'react';

import Button from './components/Button';
import Timer from './components/Timer';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const startWorkoutHandler = () => {
    console.log('start clicked');
    setHasStarted(prevState => !prevState);
  };

  const pauseWorkoutHandler = () => {
    console.log('pause clicked');
  };

  return (
    <main className="global centered">
      <div className="container column">
        <span className="title">Interval Timer</span>
        <Timer duration={5} />
        <div className="button-container">
          <Button
            title={!hasStarted ? 'Start' : 'Stop'}
            onClick={startWorkoutHandler}
          />
          <Button title="Pause" onClick={pauseWorkoutHandler} />
        </div>
      </div>
    </main>
  );
}

export default App;
