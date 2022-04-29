import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dataBase from '../data.json';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Home } from '../assets/icon-nav-home.svg';
import { ReactComponent as Movies } from '../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as Bookmark } from '../assets/icon-nav-bookmark.svg';
import pfp from '../assets/image-avatar.png';
import useStore from '../Helpers/store';

import classes from '../Styles/NavBar.module.css';

const NavBar: FC = () => {
  const [isSelected, setIsSelected] = useState('home');
  const { trending, recommended, search } = useStore();
  const navigate = useNavigate();

  const homeHandler = () => {
    setIsSelected('home');
    navigate('/');
  };

  const moviesHandler = () => {
    setIsSelected('movies');
    navigate('/movies');
  };

  const tvHandler = () => {
    setIsSelected('tvSeries');
    navigate('/shows');
  };

  const bookmarkHandler = () => {
    setIsSelected('bookmarks');
    navigate('/bookmarks');
  };

  const testStore = () => {
    console.log(trending);
    console.log(recommended);
    console.log(search);
    console.log(dataBase);
  };

  return (
    <nav className={classes.container}>
      <Logo />
      <div className={classes.options}>
        <Home
          className={isSelected === 'home' ? classes.selected : classes.icon}
          onClick={homeHandler}
        />
        <Movies
          className={isSelected === 'movies' ? classes.selected : classes.icon}
          onClick={moviesHandler}
        />
        <TvSeries
          className={
            isSelected === 'tvSeries' ? classes.selected : classes.icon
          }
          onClick={tvHandler}
        />
        <Bookmark
          className={
            isSelected === 'bookmarks' ? classes.selected : classes.icon
          }
          onClick={bookmarkHandler}
        />
      </div>
      <img onClick={testStore} className={classes.profile} src={pfp} alt="" />
    </nav>
  );
};

export default NavBar;
