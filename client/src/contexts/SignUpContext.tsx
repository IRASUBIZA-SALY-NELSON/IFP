import React, { useState, createContext, ReactNode } from "react";

// Define the form data structure
interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAndConditions: boolean;
}

// Define the context props structure
interface SignUpContextProps {
    formData: FormData;
    setFormData: (data: FormData) => void;  // Update this to accept FormData
}

// Create the context with default values
export const SignUpContext = createContext<SignUpContextProps>({
    formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false,
    },
    setFormData: () => {},  // Default function for setFormData
});

// Create the context provider component
export const SignUpContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false,
    });

    return (
        <SignUpContext.Provider value={{ formData, setFormData }}>
            {children}
        </SignUpContext.Provider>
    );
};
