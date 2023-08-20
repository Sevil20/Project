
import React from "react";
import '../assets/css/Home.scss';
import { Link } from "react-router-dom";



const Header: React.FC = () => {

  return (
    <div className="container">
      <div className="page-content">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
</div>
  );
};

export default Header;

