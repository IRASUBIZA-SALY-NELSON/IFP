import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./Dashboard.module.css";
import Header from "../Header/Header";
import ProposalStats from "./ProposalStats";
import ProposalCard from "./ProposalCard";
import BarChart from "./BarChart";
import Footer from "../Footer/Footer";
import SponsoredProposals from "./SponsoredProposals";
import YearDropdown from "./YearDropdown";
const Approvals = ({ selectedTab, onTabChange }) => {
    const approvedContent = (_jsxs("div", { children: [_jsx("p", { className: "text-success", children: "Approved Item 1" }), _jsx("p", { className: "text-success", children: "Approved Item 2" })] }));
    const unapprovedContent = (_jsxs("div", { children: [_jsx("p", { className: "text-danger", children: "Unapproved Item 1" }), _jsx("p", { className: "text-danger", children: "Unapproved Item 2" })] }));
    const allContent = (_jsxs(_Fragment, { children: [_jsx("p", { className: "fs-5 fw-semibold", children: "Proposal Statistics" }), _jsxs("div", { className: "d-flex", children: [_jsx(ProposalStats, { status: "Funded", statusNum: "50", bgColor: "success-subtle" }), _jsx(ProposalStats, { status: "Finished", statusNum: "50", bgColor: "success" }), _jsx(ProposalStats, { status: "Not Done", statusNum: "50", bgColor: "danger" })] })] }));
    const renderContent = () => {
        switch (selectedTab) {
            case "Approved":
                return approvedContent;
            case "Unapproved":
                return unapprovedContent;
            case "All":
            default:
                return allContent;
        }
    };
    return (_jsxs("div", { className: "d-flex align-items-center flex-column", children: [_jsx("div", { className: "mb-5", children: _jsx(Header, {}) }), _jsx("h3", { className: "mt-3", children: "Dashboard" }), _jsxs("div", { className: `d-flex ${styles.dashboard} justify-content-evenly p-3`, children: [_jsx("button", { className: `btn btn-success p-2 rounded-5 fs-5 fw-semibold ${selectedTab === "All" ? styles.active : ""}`, onClick: () => onTabChange("All"), children: "All" }), _jsx("button", { className: `btn bg-success-subtle p-2 pb-1 pt-1 px-0 rounded-5 fs-5 fw-semibold mx-2 ${selectedTab === "Approved" ? styles.active : ""}`, onClick: () => onTabChange("Approved"), children: "Approved" }), _jsx("button", { className: `btn bg-success-subtle rounded-5 fs-5 fw-semibold ${selectedTab === "Unapproved" ? styles.active : ""}`, onClick: () => onTabChange("Unapproved"), children: "Unapproved" })] }), _jsx("div", { className: "mt-3", children: renderContent() }), _jsxs("div", { className: "p-3", children: [_jsxs("div", { className: "d-flex justify-content-between mb-3", children: [_jsx("h3", { className: "mt-1", children: "New Proposals" }), _jsx("input", { type: "date", className: "border border-success border-2 rounded-5", style: { maxHeight: "50px", maxWidth: "145px" } })] }), _jsx(ProposalCard, { projectId: "exampleProjectId" // Replace with actual project ID
                        , proposalHeading: "The animal food support project", proposalDescription: "This project aims at producing adequate food supplies to farmers and other users." })] }), _jsxs("div", { className: "p-3", children: [_jsxs("div", { className: "d-flex justify-content-between mb-3", children: [_jsx("h4", { className: "mt-1", children: "Sponsored Proposals" }), _jsx("input", { type: "date", className: "border border-success border-2 rounded-5", style: { maxHeight: "50px", maxWidth: "140px" } })] }), _jsx(SponsoredProposals, {})] }), _jsxs("div", { children: [_jsx(YearDropdown, {}), _jsx("div", { className: "p-2", children: _jsx(BarChart, {}) })] }), _jsx(Footer, {})] }));
};
export default Approvals;
