import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-dom';

import Main from './components/Main';

/**
SET UP REACT ROUTER
  - view for all users
  - view for one user: shows user's info and repos
**/

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
