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

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Sign Up</p>
      <p className="fw-semibold text-black fs-5 mb-3">Welcome to the app</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">
            <FaRegUser className={styles.icon} size={20} />
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">
            <FaRegEnvelope className={styles.icon} size={20} />
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">
            <MdLockOutline className={styles.icon} size={20} />
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">
            <MdLockOutline className={styles.icon} size={20} />
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
        </div>

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
          <SignUpWith Icon={FcGoogle} />
          <SignUpWith Icon={FaApple} />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
