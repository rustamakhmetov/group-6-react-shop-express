import React, { Component } from 'react';

import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const { products } = this.props;

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
    );
  }
}

export default Catalog;
