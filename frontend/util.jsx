export const DAYS = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export const reverse = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
};

export const formatTime = time => {
  const timeStr = reverse(time);
  const hours = reverse(timeStr.slice(2));
  const minutes = reverse(timeStr.slice(0, 2));

  return `${hours}:${minutes}`;
};
