import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiderDrow from '../Navigation/SideDrower/SideDrower';

const layout = ( props ) => (
  <Aux>
    <Toolbar/>
    <SiderDrow />
    <main className={classes.Conteiner}>
      {props.children}
    </main>
  </Aux>
);  

export default layout;