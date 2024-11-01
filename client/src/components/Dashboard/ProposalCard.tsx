//@ts-ignore
import React from "react";
import styles from "./Dashboard.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";
import { Link } from "react-router-dom";

interface Props {
  proposalHeading: string;
  proposalDescription: string;
  projectId: string; // Add projectId to the props
}

const ProposalCard: React.FC<Props> = ({ proposalHeading, proposalDescription, projectId }) => {
  return (
    <div className="d-flex align-items-center bg-success rounded-4 p-1 px-2">
      <img src={farmer} alt="A farmer" />
      <div>
        <h6 className="fw-semibold text-white">{proposalHeading}</h6>
        <p className="px-2 text-white-50">{proposalDescription}</p>
        <div className="d-flex justify-content-center">
          <Link to={`/project-description/${projectId}`}>
            <button
              className={`btn btn-light ${styles.readMore} fs-5 fw-semibold text-success`}
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
