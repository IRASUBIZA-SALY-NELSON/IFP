//@ts-ignore
import React, { useState } from "react";
import styles from "../SignUp/SignUp.module.css";
import { FaApple, FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import SignUpWith from "../SignUp/SignUpWith";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isChecked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      console.log(response.data); // Log the entire response
      const { token } = response.data;
      console.log(token); // Log the token
      if (!token) {
        throw new Error("Token not received");
      }

      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/user-dashboard");
      }, 100); // Delay for 100ms
    } catch (error) {
      alert("Incorrect credentials");
      console.error(error);
    }
  };

  const handleCheckBoxClick = () => {
    setChecked((prevCheck) => !prevCheck);
    setFormData({ ...formData, rememberMe: !isChecked });
  };

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Login</p>
      <p className="text-black fs-5">Welcome back to the app</p>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div className={styles.inputGroup}>
          <FaRegUser className={styles.icon} size={20} />
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <MdLockOutline className={styles.icon} size={20} />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className={`${styles.inputGroup} d-flex justify-content-between`}>
          <div>
            <span onClick={handleCheckBoxClick} className={styles.icon}>
              {!isChecked ? (
                <ImCheckboxUnchecked size={20} color="green" />
              ) : (
                <ImCheckboxChecked size={20} color="green" />
              )}
            </span>
            <p className="mx-5">Remember me</p>
          </div>
          <p className="text-danger">Forgot password?</p>
        </div>
        <button
          type="submit"
          className={`btn btn-success ${styles.submitButton} fw-semibold fs-4`}
        >
          Login
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

export default Login;
