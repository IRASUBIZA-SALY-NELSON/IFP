import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
const YearDropdown = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2020 }, (v, k) => 2021 + k);
    const handleYearChange = (e) => {
        setSelectedYear(Number(e.target.value));
        console.log("Selected Year:", e.target.value); // You can use this value for further logic
    };
    return (_jsxs("div", { className: "d-flex justify-content-between mb-3", children: [_jsx("h4", { className: "mt-1", children: "Sponsored Money" }), _jsxs("select", { title: "Select the year", className: "border border-success border-2 rounded-5 outline-0", value: selectedYear || "", onChange: handleYearChange, style: { padding: "10px" }, children: [_jsx("option", { value: "", disabled: true, children: "Select Year" }), years.map((year) => (_jsx("option", { value: year, children: year }, year)))] })] }));
};
export default YearDropdown;
