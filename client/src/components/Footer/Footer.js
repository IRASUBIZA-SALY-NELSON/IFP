import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import logo from "../../assets/Logo.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = async () => {
        if (!email) {
            alert("Please enter an email address.");
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert("Subscription successful!");
                setEmail("");
            }
            else {
                const errorData = await response.json();
                alert(errorData.error);
            }
        }
        catch (error) {
            console.error("Error during subscription", error);
        }
    };
    return (_jsxs("div", { children: [_jsx("hr", {}), _jsxs("div", { className: "p-4", children: [_jsx("div", { className: `d-flex justify-content-center`, children: _jsx("img", { src: logo, alt: "A logo", className: `logo ${styles.logo}` }) }), _jsx("div", { className: "d-flex justify-content-center mt-3", children: _jsx(Link, { to: "/dashboard", className: `link ${styles.link}  text-secondary`, children: "Home" }) }), _jsx("div", { className: "d-flex justify-content-center mt-1", children: _jsx(Link, { to: "/my-profile", className: `link ${styles.link} text-secondary`, children: "Profile" }) }), _jsx("div", { className: "d-flex justify-content-center mt-1", children: _jsx(Link, { to: "/contacts", className: `link ${styles.link}  text-secondary`, children: "Contact" }) }), _jsx("div", { className: "d-flex justify-content-center mt-1", children: _jsx(Link, { to: "/about-us", className: `link ${styles.link}  text-secondary`, children: "About" }) }), _jsxs("div", { className: "d-flex justify-content-center mt-3", children: [_jsx(Link, { to: "#", className: "mx-2", children: _jsx(BsFacebook, { size: 25, color: "grey" }) }), _jsx(Link, { to: "#", className: "mx-2", children: _jsx(BsInstagram, { size: 25, color: "grey" }) }), _jsx(Link, { to: "#", className: "mx-2", children: _jsx(BsTwitter, { size: 25, color: "grey" }) }), _jsx(Link, { to: "#", className: "mx-2", children: _jsx(BsLinkedin, { size: 25, color: "grey" }) })] })] }), _jsx("hr", {}), _jsxs("div", { className: "mt-3 p-4", children: [_jsx("h3", { className: "text-center", children: "Join Our Newsletter" }), _jsx("p", { className: "text-secondary text-center", children: "Be the first to know about our latest updates, exclusive offers, and more." }), _jsxs("div", { className: "d-flex", children: [_jsx("input", { type: "text", className: "form-control", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("button", { className: "btn btn-success mx-2", onClick: handleSubscribe, children: "Subscribe" })] })] }), _jsx("hr", {}), _jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "d-flex justify-content-between px-4 mx-5 mt-3", children: [_jsx(Link, { to: "#", className: `link ${styles.link}  text-secondary`, children: "English" }), _jsx(Link, { to: "#", className: `link ${styles.link}  text-secondary`, children: "Privacy" }), _jsx(Link, { to: "#", className: `link ${styles.link}  text-secondary`, children: "Legal" })] }), _jsx("div", { className: "mt-3", children: _jsx("p", { className: "text-center text-secondary", children: "\u00A9 2024 IFP. All Rights Reserved." }) })] })] }));
};
export default Footer;
