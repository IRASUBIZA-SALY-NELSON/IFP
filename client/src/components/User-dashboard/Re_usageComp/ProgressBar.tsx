import React from 'react';
import './ProgressCard.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCard = ({ projectName, percentage }) => {
  return (
    <div className="progress-card">
      <h5>{projectName}</h5>
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
        {/* Additional buttons can be added here if needed */}
      </div>
    </div>
  );
};

export default ProgressCard;
