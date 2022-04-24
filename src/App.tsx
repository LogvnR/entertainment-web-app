import classes from './App.module.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className={classes.container}>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
