import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import "./styles.css";
import { PiCaretLeftBold } from "react-icons/pi";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CreateProject = () => {
    const [projectData, setProjectData] = useState({
        name: "",
        description: "",
        images: [],
        startDate: "",
        endDate: "",
        landSize: 0,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setProjectData({
            ...projectData,
            [event.target.name]: event.target.value,
        });
    };
    const handleImageUpload = (event) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
            setProjectData((prevState) => ({
                ...prevState,
                images: [...prevState.images, ...filesArray],
            }));
        }
    };
    const handleRemoveImage = (index) => {
        setProjectData((prevState) => ({
            ...prevState,
            images: prevState.images.filter((_, i) => i !== index),
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        const formattedData = {
            ...projectData,
            startDate: new Date(projectData.startDate).toISOString(),
            endDate: new Date(projectData.endDate).toISOString(),
        };
        console.log("Form data:", formattedData);
        try {
            const response = await fetch("http://localhost:5000/add-project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(projectData),
            });
            if (!response.ok) {
                throw new Error("Failed to create project");
            }
            const result = await response.json();
            console.log("Project created:", result);
            // Redirect or show a success message after submission
            navigate("/user-dashboard"); // For example, navigate to dashboard after submission
        }
        catch (error) {
            console.error("Error:", error);
            setError("Failed to create the project.");
        }
        finally {
            setLoading(false);
        }
    };
    const handleBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { className: "container p-3", children: [_jsx("div", { className: "back-button", onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h1", { children: "Create new project" }), _jsxs("form", { onSubmit: handleSubmit, className: "mt-3 p-2", children: [_jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "name", className: "fs-4", children: "Project Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: projectData.name, onChange: handleChange })] }), _jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "description", className: "fs-4", children: "Project Description" }), _jsx("textarea", { id: "description", name: "description", value: projectData.description, onChange: handleChange })] }), _jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "images", className: "fs-5", children: "Upload Images" }), _jsx("div", { className: "image-upload", children: _jsx("input", { type: "file", id: "images", name: "images", multiple: true, onChange: handleImageUpload }) })] }), _jsx("div", { className: "images-grid", children: projectData.images.map((image, index) => (_jsxs("div", { className: "image-wrapper", children: [_jsx("img", { src: image, alt: `Uploaded ${index}`, className: "grid-image mb-3" }), _jsx("button", { title: "please", className: "close-button bg-secondary", onClick: () => handleRemoveImage(index), children: _jsx(BsX, { size: 30 }) })] }, index))) }), _jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "startDate", className: "fs-5", children: "Start date" }), _jsx("input", { type: "date", id: "startDate", name: "startDate", value: projectData.startDate, onChange: handleChange })] }), _jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "endDate", className: "fs-5", children: "End date" }), _jsx("input", { type: "date", id: "endDate", name: "endDate", value: projectData.endDate, onChange: handleChange })] }), _jsxs("div", { className: "input-group", children: [_jsx("label", { htmlFor: "landSize", className: "fs-5", children: "Land size" }), _jsxs("div", { className: "number-input", children: [_jsx("input", { type: "number", id: "landSize", name: "landSize", className: "p-1 border-0 mx-3", value: projectData.landSize, onChange: handleChange }), _jsx("span", { children: "km" })] })] }), error && _jsx("p", { className: "error-text", children: error }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx("button", { type: "submit", className: "buttonSubmit rounded-5", disabled: loading, children: loading ? "Saving..." : "Save Project" }) })] })] }));
};
export default CreateProject;
