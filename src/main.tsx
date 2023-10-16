import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {store,persistor} from './redux/store';
import { Provider } from 'react-redux';
import {Toaster} from 'react-hot-toast'
import { PersistGate } from 'redux-persist/es/integration/react';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <>
      {console.log(persistor)}
      <Toaster position="top-center"reverseOrder={false}/>
         <App />
      </>
      </PersistGate>

    </Provider>
  </React.StrictMode>
);
