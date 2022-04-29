import { FC, useState } from 'react';
import useStore from '../Helpers/store';

import Search from './UI/Search';
import SearchResults from './SearchResults';

import classes from '../Styles/Shows.module.css';
import Display from './Display';

const Shows: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { shows } = useStore();

  return (
    <section className={classes.container}>
      <Search isSearching={setIsSearching} placeholder="movies" />
      {!isSearching && <Display content={shows} title="Shows" />}
      {isSearching && <SearchResults content={shows} />}
    </section>
  );
};

export default Shows;
