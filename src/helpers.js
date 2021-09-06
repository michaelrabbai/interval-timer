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
        exerciseTitle: 'Workout',
        duration: exerciseDuration,
      });

      if (rep !== numReps - 1) {
        regimen.push({
          exerciseTitle: 'Round rest',
          duration: roundRestDuration,
        });
      }
    }
    if (interval !== numIntervals - 1)
      regimen.push({
        exerciseTitle: 'Interval rest',
        duration: intervalRestDuration,
      });
  }

  return regimen;
};
