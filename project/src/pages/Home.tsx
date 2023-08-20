import React from "react";
import '../assets/css/Home.scss';
import { Link } from "react-router-dom";
import Main from "../components/Main";
import CardGroup from "../components/CardGroup";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home: React.FC = () => {

  return (
    <div className="container">
   <Header/>
      <div className="main">
        <div className="left-side">
          <h1>A Chef In Every Tasty Box</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            assumenda!
          </p>
        </div>
      </div>

      <br />
      <Main />
      <br />
      <CardGroup />
      <Footer />
    </div>
  );
};

export default Home;

/*
<div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
            {searchValue.length > 0 && (
              <div className="search-icon">
                <TfiSearch />
                {/* Replace with your delete icon */
              //   </div>
              //   )}
              //   {searchValue.length === 0 && (
              //     <div className="search-icon icon-2">
              //       <TfiSearch />
              //     </div>
              //   )}
              // </div>
