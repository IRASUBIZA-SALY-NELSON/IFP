import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useEffect, useState } from "react";
import ProposalCard from "../Dashboard/ProposalCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProgressCardsContainer from "./Re_usageComp/ProgressCardsContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProjects = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:5000/projects", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProjects(response.data); // Ensure response.data is an array of Project
                console.log("Number of projects fetched:", response.data.length);
            }
            catch (error) {
                console.error("Error fetching projects:", error);
                setError("Failed to load projects. Please try again later.");
            }
        };
        fetchProjects();
    }, [navigate]);
    const handleCreateNewClick = () => {
        navigate("/create-project");
    };
    return (_jsxs("div", { className: "p-3", children: [_jsx(Header, {}), _jsxs("div", { className: "mt-5", children: [error && _jsx("div", { className: "alert alert-danger", children: error }), projects.length > 0 ? (projects.map((project) => (_jsx("div", { className: "pt-5", children: _jsx(ProposalCard, { proposalHeading: project.name, proposalDescription: project.description, projectId: project._id }) }, project._id)))) : (_jsx("div", { className: "pt-5", children: _jsx("h2", { children: "Hello World" }) })), _jsx("button", { onClick: handleCreateNewClick, className: "btn btn-success mt-3", children: "Create New" }), _jsx("h4", { className: "fw-semibold mt-3", children: "Project progress" }), _jsx(ProgressCardsContainer, { projects: projects })] }), _jsx(Footer, {})] }));
};
export default UserDashboard;
