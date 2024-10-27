import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProposalCard from "../Dashboard/ProposalCard";
import ProposalStats from "../Dashboard/ProposalStats";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const DashboardSponsors = () => {
    return (_jsxs("div", { className: "pt-5", children: [_jsx(Header, {}), _jsxs("div", { className: "p-3 mt-5", children: [_jsx("h5", { className: "fw-semibold", children: "Proposal Statistics" }), _jsxs("div", { className: "d-flex", children: [_jsx(ProposalStats, { status: "Funded", statusNum: "50", bgColor: "success-subtle" }), _jsx(ProposalStats, { status: "Approved", statusNum: "50", bgColor: "success" }), _jsx(ProposalStats, { status: "Rejected", statusNum: "50", bgColor: "danger" })] })] }), _jsxs("div", { className: "p-3", children: [_jsxs("div", { className: "d-flex justify-content-between mb-3", children: [_jsx("h3", { className: "mt-2 fw-semibold", children: "New Proposals" }), _jsx("input", { title: "input the date", type: "date", className: "border border-success border-2 rounded-5", style: { maxHeight: "50px", maxWidth: "145px" } })] }), _jsx("div", { children: _jsx(ProposalCard, { proposalHeading: "The animal food support project", proposalDescription: "This project aims at producing adequate food supplies to farmers and other users.", projectId: "1" }) }), _jsx("div", { className: "mt-3", children: _jsx(ProposalCard, { proposalHeading: "The animal food support project", proposalDescription: "This project aims at producing adequate food supplies to farmers and other users.", projectId: "2" }) })] }), _jsx(Footer, {})] }));
};
export default DashboardSponsors;
