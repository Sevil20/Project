// Home.tsx
import React, { useState } from 'react';
import '../assets/css/Home.scss';
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import CardGroup from '../components/CardGroup';
import Footer from '../components/Footer';
import {TfiSearch} from 'react-icons/tfi';


const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

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
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
            {searchValue.length > 0 && (
              <div className="search-icon" >
                 <TfiSearch />{/* Replace with your delete icon */}
              </div>
            )}
            {searchValue.length === 0 && (
              <div className="search-icon icon-2">
                <TfiSearch />
              </div>
            )}
          </div>
        </div>
      </div>

      <br /> {/* Adding a gap between the two main components */}
      <Main />
      <CardGroup/>
      <Footer/>
    </div>
  );
};

export default Home;
