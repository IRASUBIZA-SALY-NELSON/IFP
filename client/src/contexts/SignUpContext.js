import { jsx as _jsx } from "react/jsx-runtime";
//@ts-ignore
import { useState, createContext } from "react";
// Create the context with default values
export const SignUpContext = createContext({
    formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false,
    },
    setFormData: () => { },
});
// Create the context provider component
export const SignUpContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false,
    });
    return (_jsx(SignUpContext.Provider, { value: { formData, setFormData }, children: children }));
};
