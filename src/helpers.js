import EXERCISETITLES from './constants/exercise-titles';

export const createWorkout = workoutSpecs => {
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
        exerciseTitle: EXERCISETITLES.exercise,
        duration: exerciseDuration,
      });

      if (rep !== numReps - 1 && roundRestDuration > 0) {
        regimen.push({
          exerciseTitle: EXERCISETITLES.rest,
          duration: roundRestDuration,
        });
      }
    }
    if (interval !== numIntervals - 1 && intervalRestDuration > 0)
      regimen.push({
        exerciseTitle: EXERCISETITLES.intervalRest,
        duration: intervalRestDuration,
      });
  }

  return regimen;
};
