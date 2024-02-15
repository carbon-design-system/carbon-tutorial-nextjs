import React from 'react';
import ReactDOM from 'react-dom';
import TutorialHeader from './TutorialHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TutorialHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
