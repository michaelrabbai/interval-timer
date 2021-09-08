import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <span className={classes.title}>Interval Timer</span>
    </nav>
  );
};

export default Navbar;
