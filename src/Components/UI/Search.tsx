import { FC, useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import useStore from '../../Helpers/store';

import classes from '../../Styles/Search.module.css';

interface Props {
  placeholder: string;
  isSearching: React.Dispatch<React.SetStateAction<any>>;
}

const Search: FC<Props> = ({ placeholder, isSearching }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { setSearch } = useStore();

  useEffect(() => {
    if (searchValue) {
      isSearching(true);
      setSearch(searchValue);
    } else {
      isSearching(false);
      setSearch('');
    }
  }, [searchValue]);

  return (
    <div className={classes.container}>
      <SearchIcon className={classes.icon} />
      <div className={classes.search}>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
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
