import { useState } from 'react';

import Button from './components/Button';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';
import { createWorkout } from './helpers';
import Navbar from './components/Navbar';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [workout, setWorkout] = useState([]);

  const startWorkoutHandler = () => {
    console.log('start clicked');
    setHasStarted(prevState => !prevState);
  };

  const pauseWorkoutHandler = () => {
    console.log('pause clicked');
  };

  const onSubmitHandler = values => {
    setWorkout(createWorkout(values));
    setHasStarted(true);
  };

  return (
    <main className="global centered">
      <div className="container column">
        <Navbar />
        {!hasStarted && <TimerForm onSubmit={onSubmitHandler} />}
        {hasStarted && <Timer workout={workout} />}
        {hasStarted && (
          <div className="button-container centered">
            <Button
              title={!hasStarted ? 'Start' : 'Stop'}
              onClick={startWorkoutHandler}
            />
            <Button title="Pause" onClick={pauseWorkoutHandler} />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
