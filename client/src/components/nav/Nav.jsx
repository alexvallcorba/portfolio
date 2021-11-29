import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from '../burgerMenu/BurgerMenu'
import './Nav.css'


function NavBar() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">
          <img
            className="alex-logo"
            id="alex-logo"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634480870/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/alex-logo-white_mye35n.png"
            alt="Alex logo"
          />
        </Link>
      </li>
      <li>
        <Link to="/about" className="links">
          ABOUT
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="links">
          WEB DEVELOPMENT
        </Link>
      </li>
      <li>
        <Link to="/design" className="links">
          DESIGN
        </Link>
      </li>
      <li>
        <Link to="/paintings" className="links">
          PAINTINGS
        </Link>
      </li>
      <li>
        <Link to="/sneakers" className="links">
           CUSTOM SNEAKERS
        </Link>
      </li> 
      <li>
      <Link to="/contact" className="links">
          CONTACT
        </Link>
      </li>

      {/* <li>
        <a className="anchor1" target="_blank" href="https://drive.google.com/file/d/1KImYTMEK-aIgGTQp05BGbtLTUVT2zp0s/view?usp=sharing">
        <h3 className="resume">RESUME</h3>
        </a>
      </li> */}
      <BurgerMenu  />

    </ul>
        
  );
}
          
      
        

export default NavBar;
