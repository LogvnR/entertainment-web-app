import { FC, useState } from 'react';
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
  const { trending, recommended, search, searchResults } = useStore();

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

  const testStore = () => {
    console.log(trending);
    console.log(recommended);
    console.log(search);
    console.log(searchResults);
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
            isSelected === 'bookmark' ? classes.selected : classes.icon
          }
          onClick={bookmarkHandler}
        />
      </div>
      <img onClick={testStore} className={classes.profile} src={pfp} alt="" />
    </nav>
  );
};

export default NavBar;
