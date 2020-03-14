import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiderDrow from '../Navigation/SideDrower/SideDrower';

class Layout extends Component{

  state = {
    showSideDrawer: true
  }

  sideDrawerHandler = () =>{
    this.setState({showSideDrawer: false});
  }

  render(){ 
    return(
      <Aux>
    <Toolbar/>
    <SiderDrow 
      open={this.state.showSideDrawer}
      closed={this.sideDrawerHandler}
    />
    <main className={classes.Conteiner}>
      {this.props.children}
    </main>
  </Aux>
    );
  }
}
export default Layout;