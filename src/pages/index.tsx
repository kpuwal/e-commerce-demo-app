import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Layout} from '../components';

import CategoriesGrid from './categories-grid';
import Product from './product';

export default class Pages extends React.Component {
  render () {return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CategoriesGrid />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );}
}
