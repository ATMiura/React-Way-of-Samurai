import React from 'react';
import ReactDOM from 'react-dom';
import SamiuraJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamiuraJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
