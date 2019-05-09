import React from 'react';
import ReactDOM from 'react-dom';

import products from '~src/constants/Products';

import Image from '~src/components/Image';
import TextBox from "./src/components/TextBox";
import Price from "./src/components/Price";

const product = products[0];

ReactDOM.render(
  <Price value={10} />,
  document.getElementById('root')
);
