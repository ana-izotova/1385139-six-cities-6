export const convertRatingToPercents = (rating: number): string =>
  rating * 10 * 2 + `%`;

export const capitalize = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString(`default`, {month: `long`});
  const year = dateObj.getFullYear();
  return `${month} ${year}`;
};
