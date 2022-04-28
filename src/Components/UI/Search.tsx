import { FC, useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import useStore from '../../Helpers/store';

import dataBase from '../../data.json';

import classes from '../../Styles/Search.module.css';

interface Props {
  placeholder: string;
  isSearching: React.Dispatch<React.SetStateAction<any>>;
}

const Search: FC<Props> = ({ placeholder, isSearching }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { setSearch, setMovies, setShows } = useStore();

  useEffect(() => {
    if (searchValue) {
      isSearching(true);
      setSearch(searchValue);
    } else {
      isSearching(false);
      setSearch('');
    }
  }, [searchValue]);

  useEffect(() => {
    for (let data of dataBase) {
      if (data.category === 'Movie') {
        setMovies(data);
      } else {
        setShows(data);
      }
    }
    console.log('Movies and TV Set');
  }, [setMovies, setShows]);

  return (
    <div className={classes.container}>
      <SearchIcon className={classes.icon} />
      <div className={classes.search}>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          autoComplete="off"
          placeholder={`Search for ${placeholder}`}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
