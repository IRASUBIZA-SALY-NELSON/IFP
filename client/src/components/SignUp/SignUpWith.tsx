import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Updated import
import styles from './SignUp.module.css';

interface SignUpWithProps {
  Icon: React.ComponentType<{ size?: number }>;
  size?: number;
  onSuccess: (response: any) => void;
  onFailure: (response: any) => void;
}

const SignUpWith: React.FC<SignUpWithProps> = ({ Icon, size = 30, onSuccess, onFailure }) => {
  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse.credential; // Get the token
    onSuccess(token); // Pass the token to your parent component
  };

  const handleGoogleLoginFailure = (error: any) => {
    onFailure(error);
  };

  return (
    <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess} // Updated handler
        onFailure={handleGoogleLoginFailure} // Updated handler
        render={renderProps => (
          <button 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled} 
            className={styles.googleButton}
          >
            <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Icon size={size} />
              <span style={{ marginLeft: '8px' }}>Sign up with Google</span>
            </span>
          </button>
        )}
      />
    </div>
  );
};

export default SignUpWith;
