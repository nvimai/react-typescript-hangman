import React from 'react';
import ReactDOM from 'react-dom';
import UsedLetterBoard from './UsedLetterBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UsedLetterBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
})