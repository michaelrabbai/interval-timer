import classes from './Button.module.css';

const Button: React.FC<React.ComponentProps<'button'>> = props => {
  return (
    <button
      className={`${classes.button} ${
        props.type === 'submit' ? classes.submit : ''
      }`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
