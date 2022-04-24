import classes from './App.module.css';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className={classes.container}>
      <NavBar />
      <div></div>
    </div>
  );
};

export default App;
