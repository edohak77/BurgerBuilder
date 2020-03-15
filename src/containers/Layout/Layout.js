import React, {Component} from 'react';
import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SiderDrow from '../../components/Navigation/SideDrower/SideDrower';

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