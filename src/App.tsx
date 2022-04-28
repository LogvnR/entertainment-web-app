import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useStore from './Helpers/store';

import dataBase from './data.json';

import classes from './App.module.css';
import Home from './Components/Home';
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';

const App = () => {
  const { setTrending, setRecommended, setMovies, setShows } = useStore();

  useEffect(() => {
    for (let data of dataBase) {
      if (data.isTrending) {
        setTrending(data);
      } else {
        setRecommended(data);
      }

      if (data.category === 'Movie') {
        setMovies(data);
      } else {
        setShows(data);
      }
    }
    console.log('JSON data call completed');
  }, [setTrending, setRecommended, setMovies, setShows]);

  return (
    <main className={classes.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </main>
  );
};

export default App;
