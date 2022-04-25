import classes from './App.module.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <main className={classes.container}>
      <NavBar />
      <Home />
    </main>
  );
};

export default App;
