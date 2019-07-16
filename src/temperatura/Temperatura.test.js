import React from 'react';
import ReactDOM from 'react-dom';
import Temperatura from './Temperatura';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Temperatura />, div);
  ReactDOM.unmountComponentAtNode(div);
});
