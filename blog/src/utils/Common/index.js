import monthNames from '../../constants/monthNames';
const getDaySuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

const getFormattedDate = (date) => {
  date = new Date(date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}${getDaySuffix(day)} ${monthNames[month]}/${year}`;
};

export default getFormattedDate;
