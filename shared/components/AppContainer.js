import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const AppContainer = ({children}) => (
  <div className='app-container'>
    <Link to='/r/pics'>Pics</Link>
    <Link to='/r/diy'>DIY</Link>
    {children}
  </div>
);

export default AppContainer;