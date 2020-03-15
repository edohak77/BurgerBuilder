import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiderDrow from '../Navigation/SideDrower/SideDrower';

class Layout extends Component{

  state = {
    showSideDrawer: false
  }

  sideDrawerHandler = () =>{
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render(){ 
    return(
      <Aux>
    <Toolbar drauwerToggleClicked={this.sideDrawerToggleHandler}/>
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