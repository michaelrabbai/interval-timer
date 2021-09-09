import { useState } from 'react';

import TimerForm from './components/TimerForm';
import Timer from './components/Timer';
import { createWorkout } from './helpers';
import Navbar from './components/Navbar';

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [workout, setWorkout] = useState([]);

  const onSubmitHandler = values => {
    setWorkout(createWorkout(values));
    setHasSubmitted(true);
  };

  const stopWorkoutHandler = () => {
    setHasSubmitted(false);
  };

  return (
    <main className="global centered">
      <div className="container column">
        <Navbar />
        {!hasSubmitted && <TimerForm onSubmit={onSubmitHandler} />}
        {hasSubmitted && (
          <Timer workout={workout} onStop={stopWorkoutHandler} />
        )}
      </div>
    </main>
  );
}

export default App;
