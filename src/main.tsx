import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import 'react-quill/dist/quill.snow.css';
import 'react-photo-view/dist/react-photo-view.css';
import { Provider } from 'react-redux';
import store from 'redux/store';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer
        style={{ fontSize: '1.8rem' }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </>,
);
