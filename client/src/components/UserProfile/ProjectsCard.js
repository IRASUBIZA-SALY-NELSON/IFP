import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./UserProfile.module.css";
const ProjectsCard = ({ projectImg, projectName }) => {
    return (_jsx("div", { className: `${styles.container} p-3 bg-success-subtle d-flex justify-content-center rounded-4`, children: _jsxs("div", { children: [_jsx("img", { src: projectImg, alt: "", className: `${styles.projectImage}` }), _jsx("div", { className: "bg-white p-2 px-4 rounded-5 text-success mt-3", children: projectName })] }) }));
};
export default ProjectsCard;
