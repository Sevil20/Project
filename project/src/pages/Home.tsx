import React from "react";
import '../assets/css/Home.scss';
import CardGroup from "../components/CardGroup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";

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
          <Searchbar/>
        </div>
      </div>

      <br />
      {/* <Main /> */}
      <br />
      <CardGroup />
      <Footer />
    </div>
  );
};

export default Home;


