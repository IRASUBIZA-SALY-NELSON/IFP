 //@ts-ignore
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate(-1);
  };

  return (
    <div className="page-not-found p-3">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist or an error occurred.</p>
      <button onClick={goBackHome} className="btn btn-success">Go Back Home</button>
    </div>
  );
};

export default PageNotFound;
