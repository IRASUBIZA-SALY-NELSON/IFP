import React from 'react';
import ProgressCard from './ProgressBar';
import './ProgressCardsContainer.css';

interface Project {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
}

interface ProgressCardsContainerProps {
  projects: Project[];
}

const ProgressCardsContainer: React.FC<ProgressCardsContainerProps> = ({ projects }) => {
  return (
    <div className="cards-container">
      {projects.map((project) => (
        <ProgressCard
          key={project._id}
          projectName={project.name}
          percentage={calculateProgress(project.startDate, project.endDate)}
        />
      ))}
    </div>
  );
};

const calculateProgress = (startDate: string, endDate: string): number => {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const currentTime = new Date();

  if (currentTime < start) {
    return 0; // Project hasn't started yet
  } else if (currentTime > end) {
    return 100; // Project is complete
  }

  const totalDuration = end.getTime() - start.getTime(); // Total duration in milliseconds
  const elapsedTime = currentTime.getTime() - start.getTime(); // Time passed since start

  const progress = (elapsedTime / totalDuration) * 100; // Progress percentage
  return isNaN(progress) ? 0 : parseFloat(progress.toFixed(2)); // Return percentage as a fixed number
};

export default ProgressCardsContainer;
