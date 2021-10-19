import React from "react";
import { Link } from "react-router-dom";
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
          PORTFOLIO
        </Link>
      </li>
      
      <li>
        <Link   to="https://drive.google.com/file/d/1m-yewP_WTovuUr-YLzdyV1spdhSm_PFe/view?ths=true" className="links">
          RESUME
        </Link>
      </li>
      <li>
      <Link to="/contact" className="links">
          CONTACT
        </Link>
        </li>
      
    </ul>
        
  );
}

export default NavBar;
