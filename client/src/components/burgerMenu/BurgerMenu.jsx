// import React from 'react';
// import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
// import './BurgerMenu.css'

// export default class Sidebar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuOpen: false
//     }
//   }

//   handleStateChange(state) {
//     this.setState({ menuOpen: state.isOpen })
//   }

//   closeMenu() {
//     this.setState({ menuOpen: false })
//   }
//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen }))
//   }

//   closeAllMenusOnEsc = (e) => {
//     e = e || window.event;
//     if (e.key === 'Escape' || e.keyCode === 27) {
//       this.setState({ menuOpen: false });
//     }
//     this.closeMenu()
//   };

  

  

//   alwaysOptions = (
//     <>
      
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/about">
//         ABOUT
//       </NavLink>
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/portfolio">
//         WEB DEVELOPMENT
//       </NavLink>
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/design">
//         DESIGN
//       </NavLink>
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/paintings">
//         PAINTINGS
//       </NavLink>
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/sneakers">
//         SNEAKERS
//       </NavLink>
//       <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/contact">
//         CONTACT
//         </NavLink>
       
      
      
//     </>
//   );

//   render() {
//     return (
//       <Menu
//         right
//         disableAutoFocus
//         isOpen={this.state.menuOpen}
//         onStateChange={(state) => this.handleStateChange(state)}
//         customOnKeyDown={this.closeAllMenusOnEsc}
//       >
//         <main id="page-wrap">
//           {this.alwaysOptions}
//           <button id="bm-resume-button"className="bm-link menu-item" >RESUME</button>
//           </main>
//       </Menu>
//     )
//   }
// }



import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import './BurgerMenu.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
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
      <NavLink onClick={() => this.closeMenu()}className="bm-link menu-item" to="/about">ABOUT</NavLink>
      <NavLink onClick={() => this.closeMenu()}className="bm-link menu-item" to="/portfolio">WEB DEVELOPMENT</NavLink>
      <NavLink onClick={() => this.closeMenu()}className="bm-link menu-item" to="/design">DESIGN</NavLink>
      <NavLink onClick={() => this.closeMenu()}className="bm-link menu-item" to="/paintings">PAINTINGS</NavLink>
      <NavLink onClick={() => this.closeMenu()}className="bm-link menu-item" to="/sneakers">CUSTOM SNEAKERS</NavLink>
      <NavLink onClick={() => this.closeMenu()} className="bm-link menu-item" to="/contact">CONTACT</NavLink>
      {/* <a className="anchor1" target="_blank" href="https://drive.google.com/file/d/1KImYTMEK-aIgGTQp05BGbtLTUVT2zp0s/view?usp=sharing">
        <h3 className="resume">RESUME</h3>
        </a> */}
    </>
  );

  

  

  render() {
    return (
      // Pass on our props
      <Menu
        rightuseHistory
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          {this.alwaysOptions}
          
        </main>
      </Menu>
    )
  }
}