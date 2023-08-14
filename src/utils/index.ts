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

export { modeValue, formatDate };
