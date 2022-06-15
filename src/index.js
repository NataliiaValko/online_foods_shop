import { PersistGate } from 'redux-persist/integration/react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { App } from './components/App';
import 'modern-normalize/modern-normalize.css';
import 'styles/base.scss';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
);
