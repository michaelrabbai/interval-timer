import { useState } from 'react';

import EXERCISE from './constants/exercise';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';
import { createWorkout } from './helpers';
import Navbar from './components/Navbar';

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [background, setBackground] = useState();

  const onSubmitHandler = values => {
    setWorkout(createWorkout(values));
    setHasSubmitted(true);
  };

  const stopWorkoutHandler = () => {
    setHasSubmitted(false);
    setBackground('');
  };

  const handleBackground = currentExercise => {
    switch (currentExercise.exerciseId) {
      case EXERCISE.ids.exercise:
        setBackground('exercise');
        break;
      case EXERCISE.ids.rest:
        setBackground('rest');
        break;
      case EXERCISE.ids.intervalRest:
        setBackground('interval-rest');
        break;
      case EXERCISE.ids.end:
        setBackground('end');
        break;
      default:
        setBackground('');
    }
  };

  return (
    <main className={`global centered ${background}`}>
      <div className="container column">
        <Navbar />
        {!hasSubmitted && <TimerForm onSubmit={onSubmitHandler} />}
        {hasSubmitted && (
          <Timer
            workout={workout}
            onStop={stopWorkoutHandler}
            onBackground={handleBackground}
          />
        )}
      </div>
    </main>
  );
}

export default App;
