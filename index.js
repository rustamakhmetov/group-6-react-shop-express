import React from 'react';
import ReactDOM from 'react-dom';

import Image from '~src/components/Image';
import products from '~src/constants/Products';

const product = products[0];

ReactDOM.render(
  <Image src={product.imageUrl} width={100} height={100} alt={product.title} />,
  document.getElementById('root')
);
