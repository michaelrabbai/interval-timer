import { useEffect, useState } from 'react';

import EXERCISETITLES from '../constants/exercise-titles';
import classes from './Timer.module.css';

const Timer = props => {
  const { workout } = props;

  const [time, setTime] = useState();
  const [title, setTitle] = useState('Timer');


  useEffect(() => {
    let timer;
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
          setTitle(EXERCISETITLES.end);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time, workout]);

  return (
    <div className={classes.timer}>
      <span className={classes.title}>{title}</span>
      <span className={classes.countdown}>{time}</span>
    </div>
  );
};

export default Timer;
