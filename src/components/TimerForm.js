import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import Button from './Button';

const TimerForm = props => {
  return (
    <Formik
      initialValues={{
        numReps: null,
        exerciseDuration: null,
        roundRestDuration: null,
        numIntervals: null,
        intervalRestDuration: null,
      }}
      validationSchema={Yup.object({
        numReps: Yup.number()
          .required('Required')
          .min(1, 'Must have at least 1 rep')
          .max(100, 'Must be 100 reps or less'),
        exerciseDuration: Yup.number()
          .required('Required')
          .min(1, 'Exercise must be at least 1 second')
          .max(3600, 'Exercise must be 3600 seconds (1 hour) or less'),
        roundRestDuration: Yup.number()
          .required('Required')
          .min(0, 'Rest cannot be lower than 0 seconds')
          .max(3600, 'Rest must be 3600 seconds (1 hour) or less'),
        numIntervals: Yup.number()
          .required('Required')
          .min(0, 'Cannot have lower than 0 intervals')
          .max(100, 'Must be 100 intervals or less'),
        intervalRestDuration: Yup.number()
          .required('Required')
          .min(0, 'Interval rest cannot be lower than 0 seconds')
          .max(3600, 'Must be 3600 seconds (1 hour) or less'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit();
        setSubmitting(false);
      }}
    >
      <Form>
        <Input
          label="Number of reps"
          name="numReps"
          type="text"
          placeholder={10}
        />
        <Input
          label="Exercise duration (s)"
          name="exerciseDuration"
          type="text"
          placeholder={5}
        />
        <Input
          label="Round rest duration"
          name="roundRestDuration"
          type="text"
          placeholder={30}
        />
        <Input
          label="Number of intervals"
          name="numIntervals"
          type="text"
          placeholder={3}
        />
        <Input
          label="Interval rest duration"
          name="intervalRestDuration"
          type="text"
          placeholder={60}
        />
        <Button type="submit" title="Submit" />
      </Form>
    </Formik>
  );
};

export default TimerForm;