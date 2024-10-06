import React from 'react';
import ProgressCard from './ProgressBar';
import './ProgressCardsContainer.css';

const ProgressCardsContainer: React.FC = () => {
  return (
    <div className="cards-container">
      <ProgressCard />
      <ProgressCard />
      <ProgressCard />
    </div>
  );
};

export default ProgressCardsContainer;
