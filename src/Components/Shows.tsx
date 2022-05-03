import { FC, useState } from 'react';
import useStore from '../Helpers/store';
import { Content } from '../Helpers/types';

import Search from './UI/Search';
import SearchResults from './SearchResults';

import classes from '../Styles/Shows.module.css';
import Display from './Display';

const Shows: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { content } = useStore();

  const shows = content.filter((show: Content) => {
    if (show.category === 'TV Series') {
      return show;
    }
    return false;
  });

  return (
    <section className={classes.container}>
      <Search isSearching={setIsSearching} placeholder="TV series" />
      {!isSearching && <Display content={shows} title="Shows" />}
      {isSearching && <SearchResults content={shows} />}
    </section>
  );
};

export default Shows;
