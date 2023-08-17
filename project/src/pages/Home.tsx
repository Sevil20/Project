// Home.tsx
import React from 'react';
import '../assets/css/Home.scss';
import { Link } from 'react-router-dom';
import Main from '../components/Main';

const Home: React.FC = () => {
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

      <div className="main">
        <div className="left-side">
          <h1>A Chef In Every Tasty Box</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            assumenda!
          </p>
          <div className="btn-group">
            <button>View Menu</button>
          </div>
        </div>
      </div>

      <br /> {/* Adding a gap between the two main components */}
      <Main />
    </div>
  );
};

export default Home;
