import { FC } from 'react';
import useStore from '../Helpers/store';

import classes from '../Styles/Recommended.module.css';
import ContentCard from './UI/ContentCard';

const Recommended: FC = () => {
  const { recommended } = useStore();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Recommended for you</h2>
      <div className={classes.content}>
        {recommended.map((recommendation: any) => (
          <ContentCard
            year={recommendation.year}
            title={recommendation.title}
            rating={recommendation.rating}
            category={recommendation.category}
            image={recommendation.thumbnail.regular.small}
            key={recommendation.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
