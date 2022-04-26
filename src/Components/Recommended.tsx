import { FC } from 'react';

import classes from '../Styles/Recommended.module.css';
import ContentCard from './UI/ContentCard';

const Recommended: FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Recommended for you</h2>
      <div className={classes.content}>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  );
};

export default Recommended;
