import React, { Component } from 'react';

import products from '~src/constants/Products';
import Catalog from "./src/components/Catalog";

class App extends Component {
  render() {

    return (
      <Catalog products={products} />
    )
  }
}

export default App;
