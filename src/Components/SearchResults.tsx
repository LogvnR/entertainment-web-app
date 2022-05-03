import { FC, useEffect, useState } from 'react';
import useStore from '../Helpers/store';

import { Content } from '../Helpers/types';

import classes from '../Styles/SearchResults.module.css';
import ContentCard from './UI/ContentCard';

interface Props {
  content: Content[];
}

const SearchResults: FC<Props> = ({ content }) => {
  const [searchCount, setSearchCount] = useState<number>(0);
  const { search } = useStore();

  const searchedList = content.filter((searched: Content) => {
    if (searched.title.toLowerCase().includes(search.toLowerCase())) {
      return searched;
    }
    return false;
  });

  useEffect(() => {
    setSearchCount(searchedList.length);
  }, [searchedList]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Found {searchCount} results for '{search}'
      </h2>
      <div className={classes.content}>
        {searchedList.map((searched: Content) => (
          <ContentCard
            year={searched.year}
            title={searched.title}
            rating={searched.rating}
            category={searched.category}
            thumbnail={searched.thumbnail}
            isBookmarked={searched.isBookmarked}
            key={searched.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
