//@ts-ignore
import React, { useState, useContext } from "react";
import { FaRegUser, FaRegEnvelope, FaApple } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import styles from "./SignUp.module.css";
import SignUpWith from "./SignUpWith";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from '../../contexts/SignUpContext';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const SignupForm: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  const { formData, setFormData } = useContext(SignUpContext);
  const navigate = useNavigate();

  const handleCheckBoxClick = () => {
    setChecked((prevCheck) => {
      const newCheck = !prevCheck;
      setFormData({ ...formData, termsAndConditions: newCheck });
      return newCheck;
    });
  };

  const handleNextClick = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.termsAndConditions
    ) {
      alert("Please fill in all fields and accept the terms and conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/complete-profile");
  };

  const handleGoogleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('Google Login Success:', response);
    // Handle successful login, e.g., send data to your backend or update context
  };

  const handleGoogleFailure = (response: any) => {
    console.error('Google Login Failed:', response);
    // Handle failed login (e.g., show an error message)
  };

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Sign Up</p>
      <p className="fw-semibold text-black fs-5 mb-3">Welcome to the app</p>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Username, Email, Password, Confirm Password Inputs */}
        
        <div className={styles.inputGroup}>
          <span onClick={handleCheckBoxClick} className={styles.icon}>
            {!isChecked ? (
              <ImCheckboxUnchecked className={styles.icon} size={20} color="green" />
            ) : (
              <ImCheckboxChecked className={styles.icon} size={20} color="green" />
            )}
          </span>
          <label className="mx-5">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="button"
          className={`btn btn-success ${styles.submitButton} fw-semibold fs-4`}
          onClick={handleNextClick}
        >
          Next
        </button>

        <h4 className="text-center mt-3">or</h4>
        <div className="d-flex justify-content-between px-5 mt-3">
          <SignUpWith 
            Icon={FcGoogle} 
            onSuccess={handleGoogleSuccess} 
            onFailure={handleGoogleFailure} 
          />
          <SignUpWith Icon={FaApple} />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
