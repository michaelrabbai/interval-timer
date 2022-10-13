import { useField } from 'formik';

import classes from './Input.module.css';

interface InputProps {
  id?: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = props => {
  const [field, meta] = useField(props);

  return (
    <div className={classes.container}>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} className={classes.input} />
      {meta.touched && meta.error && (
        <div className={classes.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default Input;
