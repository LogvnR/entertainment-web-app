export type Content = {
  title: string;
  thumbnail: {
    [key: string]: item;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

type item = {
  small: string;
  medium?: string;
  large: string;
};
