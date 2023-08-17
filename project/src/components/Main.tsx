// Main.tsx

import React from 'react';
import '../assets/css/Main.scss'; // Import your SASS file

const Main: React.FC = () => {
  return (
    <div className="container">
      <div className="main-page">
        <h1>Favorite Meals</h1>
        <div className="btn-categories">
          <div className="btn-group">
            <button className="popular">Popular</button>
            <button className="most-loved">Most Loved</button>
            <button className="new">New</button>
          </div>
        </div>
        <div className="categories-image-info">
          <div className="category-group">
            <img
              className="image"
              src=""
              alt="Delicious Food"
            />
            <p className="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus, reiciendis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
