import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './BurgerMenu.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };

  

  

  alwaysOptions = (
    <>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/about">
        ABOUT
      </Link>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/portfolio">
        WEB DEVELOPMENT
      </Link>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/design">
        DESIGN
      </Link>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/paintings">
        PAINTINGS
      </Link>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/sneakers">
        SNEAKERS
      </Link>
      <Link onClick={() => this.closeMenu()} className="bm-link menu-item" to="/contact">
        CONTACT
      </Link>
      
      
    </>
  );

  render() {
    return (
      <Menu
        right
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          {this.alwaysOptions}
          <button id="bm-resume-button"className="bm-link menu-item" >RESUME</button>
          </main>
      </Menu>
    )
  }
}