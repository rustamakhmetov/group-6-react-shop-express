import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';

const render = async () => {
  return ReactDOMServer.renderToStaticMarkup(<App />);
};

export default render;
