import { jsx as _jsx } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import Approvals from "./Approval";
const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState("All");
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (_jsx("div", { className: "mt-5", children: _jsx(Approvals, { selectedTab: selectedTab, onTabChange: handleTabChange }) }));
};
export default Dashboard;
