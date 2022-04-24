import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

import classes from '../../Styles/Search.module.css';

interface Props {
  placeholder: string;
}

const Search: FC<Props> = ({ placeholder }) => {
  return (
    <div className={classes.container}>
      <SearchIcon className={classes.icon} />
      <div className={classes.search}>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder={`Search for ${placeholder}`}
        />
      </div>
    </div>
  );
};

export default Search;
