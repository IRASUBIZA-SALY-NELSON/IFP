import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import styles from "./JobChoice.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
const JobChoice = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const handleCheckBoxClick = (job) => {
        setSelectedJob(job);
    };
    return (_jsx("div", { className: styles.jobChoice, children: _jsxs("div", { children: [_jsx("h4", { className: "text-success fs-2 fw-bold", children: "Choose your job" }), _jsxs("form", { className: `jobChoiceForm ${styles.jobChoiceForm}`, children: [_jsxs("div", { className: styles.inputGroup, onClick: () => handleCheckBoxClick("Farmer"), children: [_jsx("span", { className: styles.icon, children: selectedJob === "Farmer" ? (_jsx(MdRadioButtonChecked, { size: 30, color: "green" })) : (_jsx(MdRadioButtonUnchecked, { size: 30, color: "green" })) }), _jsx("p", { className: "fs-3", children: "Farmer" })] }), _jsxs("div", { className: styles.inputGroup, onClick: () => handleCheckBoxClick("Sponsor"), children: [_jsx("span", { className: styles.icon, children: selectedJob === "Sponsor" ? (_jsx(MdRadioButtonChecked, { size: 30, color: "green" })) : (_jsx(MdRadioButtonUnchecked, { size: 30, color: "green" })) }), _jsx("p", { className: "fs-3", children: "Sponsor" })] }), _jsxs("div", { className: styles.inputGroup, onClick: () => handleCheckBoxClick("Middle Man"), children: [_jsx("span", { className: styles.icon, children: selectedJob === "Middle Man" ? (_jsx(MdRadioButtonChecked, { size: 30, color: "green" })) : (_jsx(MdRadioButtonUnchecked, { size: 30, color: "green" })) }), _jsx("p", { className: "fs-3", children: "Middle Man" })] })] }), _jsx("button", { className: `${styles.submitButton} mt-5 fw-semibold fs-4`, children: "Continue" })] }) }));
};
export default JobChoice;
