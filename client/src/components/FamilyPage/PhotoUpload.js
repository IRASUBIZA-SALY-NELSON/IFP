import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from 'react';
import './PhotoUpload.css';
const PhotoUpload = () => {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    return (_jsxs("div", { className: "photo-upload-container mb-3", children: [_jsx("div", { className: "upload-section", children: _jsxs("label", { className: "circle-upload", children: [_jsx("input", { type: "file", accept: "image/*", onChange: handleImageChange }), image ? (_jsx("img", { src: URL.createObjectURL(image), alt: "Uploaded", className: "uploaded-image" })) : (_jsx("span", { className: "plus-icon", children: "+" }))] }) }), _jsxs("div", { className: "caption-section", children: [_jsx("span", { className: "caption", children: "Add small caption" }), _jsx("input", { type: "text", placeholder: "Write your message", value: message, onChange: handleMessageChange, className: "message-input" })] })] }));
};
export default PhotoUpload;
