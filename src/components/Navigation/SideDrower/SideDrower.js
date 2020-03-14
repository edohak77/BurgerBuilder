import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrower.module.css';

const sideDrower = (props) =>{

  return(
    <div className={classes.SideDrower}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
};

export default sideDrower;