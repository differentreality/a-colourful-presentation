import React, { Component } from 'react';
import SidebarMenu from '../SidebarMenu';
import MobileHeader from '../MobileHeader';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      menu: <SidebarMenu/>
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    window.innerWidth <= 770 ? this.setState({ menu: <MobileHeader /> }) : this.setState({ menu: <SidebarMenu /> })
  }



  render() {
    return (
            this.state.menu
    );
  }
}

export default Menu;
