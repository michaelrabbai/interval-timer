import EXERCISE from './constants/exercise';

interface WorkoutSpecs {
  numIntervals: number;
  numReps: number;
  exerciseDuration: number;
  roundRestDuration: number;
  intervalRestDuration: number;
}

export const createWorkout = (workoutSpecs: WorkoutSpecs) => {
  const {
    numIntervals,
    numReps,
    exerciseDuration,
    roundRestDuration,
    intervalRestDuration,
  } = workoutSpecs;

  const regimen = [];
  for (let interval = 0; interval < numIntervals; ++interval) {
    for (let rep = 0; rep < numReps; ++rep) {
      regimen.push({
        exerciseId: EXERCISE.ids.exercise,
        exerciseTitle: EXERCISE.titles.exercise,
        duration: exerciseDuration,
        interval: interval + 1,
        rep: rep + 1,
      });

      if (rep !== numReps - 1 && roundRestDuration > 0) {
        regimen.push({
          exerciseId: EXERCISE.ids.rest,
          exerciseTitle: EXERCISE.titles.rest,
          duration: roundRestDuration,
        });
      }
    }

    if (interval !== numIntervals - 1 && intervalRestDuration > 0)
      regimen.push({
        exerciseId: EXERCISE.ids.intervalRest,
        exerciseTitle: EXERCISE.titles.intervalRest,
        duration: intervalRestDuration,
      });
  }

  regimen.push({
    exerciseId: EXERCISE.ids.end,
    exerciseTitle: EXERCISE.titles.end,
    duration: 0,
  });

  return regimen;
};
