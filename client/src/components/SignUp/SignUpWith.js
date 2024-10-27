import { jsx as _jsx } from "react/jsx-runtime";
import styles from './SignUp.module.css';
const SignUpWith = ({ Icon, size = 30 }) => {
    return (_jsx("div", { className: `${styles.container} d-flex justify-content-center align-items-center`, children: _jsx(Icon, { size: size }) }));
};
export default SignUpWith;
