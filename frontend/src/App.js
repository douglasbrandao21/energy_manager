import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;