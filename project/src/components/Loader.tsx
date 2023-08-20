import React from 'react';
import { Loader as SuiteLoader } from 'rsuite';

const Loader: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{color:'orange'}}>
        <SuiteLoader size="lg" content="Loading"/> {/* Adjust size here */}
      </div>
    </div>
  );
};

export default Loader;
