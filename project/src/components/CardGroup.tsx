// CardGroup.tsx

import React from 'react';
import '../assets/css/CardGroup.scss'; // Import the SASS file

const CardGroup: React.FC = () => {
  return (
    <div className="card-group">
      <div className="card">
        <h2>Card 1</h2>
        <p>This is the content of Card 1.</p>
      </div>
      <div className="card">
        <h2>Card 2</h2>
        <p>This is the content of Card 2.</p>
      </div>
      <div className="card">
        <h2>Card 3</h2>
        <p>This is the content of Card 3.</p>
      </div>
    </div>
  );
};

export default CardGroup;
