import { useEffect, useState } from 'react';

import TITLES from '../constants/titles';
import Button from './Button';
import classes from './Timer.module.css';

const Timer = props => {
  const { workout } = props;

  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState();
  const [title, setTitle] = useState('Timer');

  useEffect(() => {
    let timer;
    if (hasStarted && !isPaused) {
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
  }, [hasStarted, isPaused, time, workout]);

  const startWorkoutHandler = () => {
    const currentExercise = workout.shift();
    if (currentExercise) {
      setTime(currentExercise.duration);
      setTitle(currentExercise.exerciseTitle);
    }
    setHasStarted(true);
  };

  const toggleWorkoutHandler = () => {
    if (!hasStarted) {
      startWorkoutHandler();
    } else {
      setIsPaused(prevState => !prevState);
    }
  };

  return (
    <div className={classes.timer}>
      <span className={classes.title}>
        {!hasStarted ? TITLES.timer : title}
      </span>
      {hasStarted && !isPaused && (
        <span className={classes.countdown}>{time}</span>
      )}
      <div className={classes['button-container']}>
        <Button
          title={!hasStarted ? 'Start' : !isPaused ? 'Pause' : 'Continue'}
          onClick={toggleWorkoutHandler}
        />
        <Button title="Stop" onClick={props.onStop} />
      </div>
    </div>
  );
};

export default Timer;
