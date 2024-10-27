import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProgressCard.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ProgressCard = ({ projectName, percentage }) => {
    return (_jsxs("div", { className: "progress-card", children: [_jsx("h5", { children: projectName }), _jsx("div", { className: "progress-container", children: _jsx(CircularProgressbar, { value: percentage, text: `${percentage}%`, styles: buildStyles({
                        textColor: '#228B22',
                        pathColor: '#228B22',
                        trailColor: 'rgba(0, 0, 0, 0.1)',
                    }) }) }), _jsx("div", { className: "buttons-container" })] }));
};
export default ProgressCard;
