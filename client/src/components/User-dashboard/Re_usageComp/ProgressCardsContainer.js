import { jsx as _jsx } from "react/jsx-runtime";
import ProgressCard from './ProgressBar';
import './ProgressCardsContainer.css';
const ProgressCardsContainer = ({ projects }) => {
    return (_jsx("div", { className: "cards-container", children: projects.map((project) => (_jsx(ProgressCard, { projectName: project.name, percentage: calculateProgress(project.startDate, project.endDate) }, project._id))) }));
};
const calculateProgress = (startDate, endDate) => {
    if (!startDate || !endDate) {
        return 0;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const currentTime = new Date();
    if (currentTime < start) {
        return 0; // Project hasn't started yet
    }
    else if (currentTime > end) {
        return 100; // Project is complete
    }
    const totalDuration = end.getTime() - start.getTime(); // Total duration in milliseconds
    const elapsedTime = currentTime.getTime() - start.getTime(); // Time passed since start
    const progress = (elapsedTime / totalDuration) * 100; // Progress percentage
    return isNaN(progress) ? 0 : parseFloat(progress.toFixed(2)); // Return percentage as a fixed number
};
export default ProgressCardsContainer;
