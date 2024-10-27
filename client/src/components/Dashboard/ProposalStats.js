import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ProposalStats = ({ status, statusNum, bgColor }) => {
    return (_jsx("div", { className: "text-center me-1", children: _jsx("div", { className: `d-flex justify-content-center bg-${bgColor} rounded-4`, children: _jsxs("div", { className: "p-3", children: [_jsx("h5", { children: status }), _jsx("p", { className: "fs-5 fw-semibold", children: statusNum })] }) }) }));
};
export default ProposalStats;
