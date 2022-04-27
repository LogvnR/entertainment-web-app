import { FC, useEffect } from 'react';
import useStore from '../Helpers/store';

import dataBase from '../data.json';

import classes from '../Styles/SearchResults.module.css';
import ContentCard from './UI/ContentCard';

const SearchResults: FC = () => {
  const { search, searchResults, setSearchResults } = useStore();

  useEffect(() => {
    for (let data of dataBase) {
      if (search && data.title == search) {
        setSearchResults(data);
      }
    }
  }, [search]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Found {searchResults.length} results for '{search}'
      </h2>
      <div className={classes.content}>
        {searchResults.map((searched: any) => (
          <ContentCard
            year={searched.year}
            title={searched.title}
            rating={searched.rating}
            category={searched.category}
            image={searched.thumbnail.regular.small}
            key={searched.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
