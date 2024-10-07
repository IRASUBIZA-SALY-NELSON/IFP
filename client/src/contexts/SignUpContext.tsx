import React, { useState } from "react"
import SignUpWith from '../components/SignUp/SignUpWith';

interface FormData{
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    termsAndConditions: boolean,
}

interface SignUpContextProps {
    formData: FormData
    setFormData: () => void 
}

export const SignUpContext  = React.createContext({ formData: {}, setFormData: () => {} })


export const SignUpContextProvider: React.FC<{ children: React.ReactNode }> =  ({ children}) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false,
   });

    return (
       <SignUpContext.Provider value={{ formData, setFormData}}>
        {children}
       </SignUpContext.Provider>
    )
}