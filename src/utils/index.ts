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
export { modeValue, formatDate, selectColor };
