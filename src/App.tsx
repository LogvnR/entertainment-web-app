import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useStore from './Helpers/store';

import dataBase from './data.json';

import classes from './App.module.css';
import Home from './Components/Home';
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';
import Shows from './Components/Shows';
import Bookmarks from './Components/Bookmarks';

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { setContent, setScreenWidth } = useStore();

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  useEffect(() => {
    for (let data of dataBase) {
      if (data.isTrending) {
        setContent(data, 'trending');
      } else {
        setContent(data, 'recommended');
      }

      if (data.category === 'Movie') {
        setContent(data, 'movie');
      } else {
        setContent(data, 'show');
      }
    }

    console.log('JSON data call completed');
  }, [setContent, setScreenWidth]);

  return (
    <main className={classes.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </main>
  );
};

export default App;
