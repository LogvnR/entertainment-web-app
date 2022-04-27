import { FC, useEffect } from 'react';
import useStore from '../Helpers/store';

import dataBase from '../data.json';

import classes from '../Styles/Home.module.css';
import Recommended from './Recommended';
import Trending from './Trending';
import Search from './UI/Search';

const Home: FC = () => {
  const { setTrending, setRecommended } = useStore();

  useEffect(() => {
    for (let data of dataBase) {
      if (data.isTrending) {
        setTrending(data);
      } else {
        setRecommended(data);
      }
    }
    console.log('JSON data call completed');
  }, [setTrending, setRecommended]);

  return (
    <section className={classes.container}>
      <Search placeholder="movies and TV series" />
      <Trending />
      <Recommended />
    </section>
  );
};

export default Home;
