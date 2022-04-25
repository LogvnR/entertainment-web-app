import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import classes from '../../Styles/Carousel.module.css';
import content from '../../data.json';
import TrendingCard from './TrendingCard';

const Carousel = () => {
  const [width, setWidth] = useState<number | undefined>(0);
  const [trending, setTrending] = useState<any>([]);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(
      Number(carousel?.current?.scrollWidth) -
        Number(carousel?.current?.offsetWidth) +
        10
    );
  }, []);

  useEffect(() => {
    let trendingContent = [];
    for (let i of content) {
      if (i.isTrending === true) {
        trendingContent.push(i);
      }
    }
    setTrending(trendingContent);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className={classes.container}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -Number(width) }}
        className={classes.carousel}
      >
        {trending.map((trend: any) => (
          <TrendingCard
            className={classes.item}
            year={trend.year}
            title={trend.title}
            rating={trend.rating}
            category={trend.category}
            image={trend.thumbnail.trending.small}
            key={trend.title}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
