import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

let mode = import.meta.env.MODE;
const modeValue =
  mode === 'development' ? import.meta.env.VITE_APP_DEVELOPMENT_URL : import.meta.env.VITE_APP_PRODUCTION_URL;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const selectColor = (category: string): 'primary' | 'secondary' | 'error' | 'info' | 'success' => {
  switch (category) {
    case 'sport':
      return 'success';
    case 'entertainment':
      return 'primary';
    case 'news':
      return 'secondary';
    case 'service':
      return 'error';
    case 'love':
      return 'success';
    case 'romantic':
      return 'secondary';
    case 'tech':
      return 'info';
    default:
      return 'primary';
  }
};

export const getTimeMoment = (startDate: string): string => {
  const durationObj = dayjs().diff(dayjs(startDate), 'second');

  if (durationObj >= 31536000) {
    // 1 year in seconds
    return Math.floor(durationObj / 31536000) + 'y';
  } else if (durationObj >= 86400) {
    // 1 day in seconds
    return Math.floor(durationObj / 86400) + 'd';
  } else if (durationObj >= 3600) {
    // 1 hour in seconds
    return Math.floor(durationObj / 3600) + 'hr';
  } else if (durationObj >= 60) {
    // 1 minute in seconds
    return Math.ceil(durationObj / 60) + 'm';
  } else {
    return '1m'; // Round up to 1 minute if less than 1 minute
  }
};

export { modeValue, formatDate, selectColor };
