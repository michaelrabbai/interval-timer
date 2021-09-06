import { useEffect, useState } from 'react';

import classes from './Timer.module.css';

const Timer = props => {
  const { duration } = props;
  const [time, setTime] = useState(duration);

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => {
        setTime(prevTime => --prevTime);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return <div className={classes.timer}>{time}</div>;
};

export default Timer;
