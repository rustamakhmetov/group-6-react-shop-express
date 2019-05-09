import React, { Component } from 'react';

import products from '~src/constants/Products';
import ProductCard from "./src/components/ProductCard";

class App extends Component {
  render() {

    return (
      <div>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App;
