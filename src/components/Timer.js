import { useEffect, useState } from 'react';

import EXERCISE from '../constants/exercise';
import Button from './Button';
import classes from './Timer.module.css';

const Timer = props => {
  const { workout, onBackground } = props;

  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [id, setId] = useState(EXERCISE.ids.exercise);
  const [title, setTitle] = useState('Timer');
  const [rep, setRep] = useState(1);
  const [interval, setInterval] = useState(1);
  const [time, setTime] = useState();

  console.log(workout);

  useEffect(() => {
    let timer;
    if (hasStarted && !isPaused) {
      timer = setTimeout(() => {
        if (time > 1) {
          setTime(prevTime => --prevTime);
        } else {
          const currentExercise = workout.shift();
          if (currentExercise) {
            setId(currentExercise.exerciseId);
            setTime(currentExercise.duration);
            setTitle(currentExercise.exerciseTitle);
            setRep(currentExercise.rep);
            setInterval(currentExercise.interval);
            onBackground(currentExercise);
          }
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hasStarted, isPaused, time, workout, onBackground]);

  const startWorkoutHandler = () => {
    const currentExercise = workout.shift();
    if (currentExercise) {
      setTime(currentExercise.duration);
      setTitle(currentExercise.exerciseTitle);
      onBackground(currentExercise);
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
        {!hasStarted || isPaused ? EXERCISE.titles.timer : title}
      </span>
      {hasStarted && id === EXERCISE.ids.exercise && (
          <div className={classes['specs-container']}>
            <span className={classes.specs}>{`Interval: ${interval}`}</span>
            <span className={classes.specs}>{`Rep: ${rep}`}</span>
          </div>
      )}
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
// input: 2 2 3 2 4
// output: 2 3 2 4 2 3 2
