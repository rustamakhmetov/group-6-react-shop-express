import React, { Component } from 'react';

import products from './constants/Products';
import Catalog from "./components/Catalog";

class App extends Component {
  render() {

    return (
      <Catalog products={products} />
    )
  }
}

export default App;
