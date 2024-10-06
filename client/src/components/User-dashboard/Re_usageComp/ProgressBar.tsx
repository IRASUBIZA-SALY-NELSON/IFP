import React from 'react';
import './ProgressCard.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCard: React.FC = () => {
  const percentage = 50;

  return (
    <div className="progress-card">
      <h5>Automated Land Watering</h5>
      <div className="progress-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#228B22',
            pathColor: '#228B22',
            trailColor: 'rgba(0, 0, 0, 0.1)',
          })}
        />
      </div>
      <div className="buttons-container">
        <button className="btn-all">All</button>
        <button className="btn-light">Land prep</button>
        <button className="btn-light">Equipments</button>
      </div>
    </div>
  );
};

export default ProgressCard;
