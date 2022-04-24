import { FC, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Home } from '../assets/icon-nav-home.svg';
import { ReactComponent as Movies } from '../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as Bookmark } from '../assets/icon-nav-bookmark.svg';
import pfp from '../assets/image-avatar.png';

import classes from '../Styles/NavBar.module.css';

const NavBar: FC = () => {
  // const [home, setHome] = useState(true);
  // const [movies, setMovies] = useState(false);
  // const [tvSeries, setTvSeries] = useState(false);
  // const [bookmark, setBookmark] = useState(false);
  const [isSelected, setIsSelected] = useState('home');

  const homeHandler = () => {
    setIsSelected('home');
  };

  const moviesHandler = () => {
    setIsSelected('movies');
  };

  const tvHandler = () => {
    setIsSelected('tvSeries');
  };

  const bookmarkHandler = () => {
    setIsSelected('bookmark');
  };

  return (
    <div className={classes.container}>
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
            isSelected === 'bookmark' ? classes.selected : classes.icon
          }
          onClick={bookmarkHandler}
        />
      </div>
      <img className={classes.profile} src={pfp} alt="" />
    </div>
  );
};

export default NavBar;
