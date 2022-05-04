import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Categories from './categories';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
