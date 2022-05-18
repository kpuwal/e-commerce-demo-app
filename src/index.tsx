import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

import Categories from './pages/categories';
import Product from './pages/product';
import Cart from './pages/cart';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Categories />} />
              <Route path=":id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
