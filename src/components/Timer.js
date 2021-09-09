import { useEffect, useState } from 'react';

import TITLES from '../constants/titles';
import Button from './Button';
import classes from './Timer.module.css';

const Timer = props => {
  const { workout } = props;

  const [hasStarted, setHasStarted] = useState(false);
  const [time, setTime] = useState();
  const [title, setTitle] = useState('Timer');

  console.log(workout);

  useEffect(() => {
    let timer;
    if (hasStarted) {
      timer = setTimeout(() => {
        if (time > 1) {
          setTime(prevTime => --prevTime);
        } else {
          const currentExercise = workout.shift();
          if (currentExercise) {
            setTime(currentExercise.duration);
            setTitle(currentExercise.exerciseTitle);
          } else {
            setTime(0);
            setTitle(TITLES.exercise.end);
          }
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hasStarted, time, workout]);

  const startWorkoutHandler = () => {
    setHasStarted(true);
  };

  const toggleWorkoutHandler = () => {
    setHasStarted(prevState => !prevState);
  };

  return (
    <div className={classes.timer}>
      <span className={classes.title}>
        {!hasStarted ? TITLES.timer : title}
      </span>
      {!hasStarted && <Button title="Start" onClick={startWorkoutHandler} />}
      {hasStarted && <span className={classes.countdown}>{time}</span>}
      {hasStarted && (
        <div className="button-container centered">
          <Button
            title={!hasStarted ? 'Start' : 'Pause'}
            onClick={toggleWorkoutHandler}
          />
          <Button title="Stop" onClick={props.onStop} />
        </div>
      )}
    </div>
  );
};

export default Timer;
// input: 2 2 3 2 4
// output: 2 3 2 4 2 3 2
