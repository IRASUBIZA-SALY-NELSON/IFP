import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./ProjectDesc.module.css";
import axios from "axios";
const ProjectDesc = () => {
    const [project, setProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { projectId } = useParams();
    const parseDate = (dateString) => {
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
    };
    useEffect(() => {
        const fetchProject = async () => {
            if (!projectId) {
                setError(true);
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://localhost:5000/project/${projectId}`);
                setProject(response.data);
                setLoading(false);
            }
            catch {
                setError(true);
                setLoading(false);
            }
        };
        fetchProject();
    }, [projectId]);
    const handleBack = () => navigate(-1);
    const goToFundPage = () => navigate("/funds/deposit/card");
    const handleNotFound = () => setShowModal(true);
    const handleConfirmCancel = () => {
        setShowModal(false);
        navigate("/user-dashboard");
    };
    const handleCloseModal = () => setShowModal(false);
    if (loading) {
        return _jsx("div", { children: "Loading project details..." });
    }
    if (error || !project) {
        return _jsx("div", { children: "Error loading project or project not found." });
    }
    return (_jsxs("div", { className: "p-3 pt-3", children: [_jsxs("div", { className: "d-flex justify-content-evenly", children: [_jsx("div", { className: "back-button", onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h1", { children: "Project Description" })] }), _jsx("h3", { className: "text-center mt-3 text-success", children: project.name }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: project.imageUrl, alt: "Project", className: `${styles["project-image"]}` }) }), _jsx("p", { className: "mt-3 p-3", children: project.description }), _jsxs("div", { className: "d-flex justify-content-between", children: [_jsxs("div", { children: [_jsx("span", { className: "fw-semibold text-success d-block", children: "Project Start" }), _jsx("span", { children: parseDate(project.startDate) })] }), _jsxs("div", { children: [_jsx("span", { className: "fw-semibold text-success d-block", children: "Project End" }), _jsx("span", { children: parseDate(project.endDate) })] })] }), _jsxs("div", { className: "mt-3", children: [_jsx("h5", { className: "fw-semibold text-success", children: "Make an action" }), _jsxs("div", { className: "d-flex", children: [_jsx("button", { className: "btn btn-success fw-semibold p-2 mx-3", onClick: goToFundPage, children: "Fund" }), _jsx("button", { className: "btn btn-danger fw-semibold mx-3 p-2", onClick: handleNotFound, children: "Not Fund" })] })] }), _jsxs(Modal, { show: showModal, onHide: handleCloseModal, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Cancel Funding" }) }), _jsx(Modal.Body, { children: "Are you sure you want to cancel funding for this project?" }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: handleCloseModal, children: "Cancel" }), _jsx(Button, { variant: "success", onClick: handleConfirmCancel, children: "Yes, Cancel" })] })] })] })] }));
};
export default ProjectDesc;
