import { useEffect, useState } from 'react';

import classes from './Timer.module.css';

const Timer = props => {
  const { workout } = props;
  const [time, setTime] = useState();
  

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (time > 1) {
        setTime(prevTime => --prevTime);
      } else {
        const currentExercise = workout.shift();
        console.log('currentExercise:');
        console.log(currentExercise);
        if (currentExercise) {
          setTime(currentExercise.duration);
        } else {
          setTime(0);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time, workout]);

  return (
    <div className={classes.timer}>{time}</div>
  );
};

export default Timer;
