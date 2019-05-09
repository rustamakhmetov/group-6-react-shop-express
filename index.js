import React from 'react';
import ReactDOM from 'react-dom';

import Image from '~src/components/Image';
import products from '~src/constants/Products';
import TextBox from "./src/components/TextBox";

const product = products[0];

ReactDOM.render(
  <TextBox>
    Hello, world!
  </TextBox>,
  document.getElementById('root')
);
