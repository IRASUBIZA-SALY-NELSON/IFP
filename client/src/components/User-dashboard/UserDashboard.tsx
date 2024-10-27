 //@ts-ignore
import React, { useEffect, useState } from "react";
import ProposalCard from "../Dashboard/ProposalCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProgressCardsContainer from "./Re_usageComp/ProgressCardsContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the Project interface
interface Project {
  _id: string;
  name: string;
  description: string;
  startDate: string; // Add startDate
  endDate: string;   // Add endDate
}

const UserDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://localhost:5000/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProjects(response.data); // Ensure response.data is an array of Project
        console.log("Number of projects fetched:", response.data.length);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      }
    };

    fetchProjects();
  }, [navigate]);

  const handleCreateNewClick = () => {
    navigate("/create-project");
  };

  return (
    <div className="p-3">
      <Header />
      <div className="mt-5">
        {error && <div className="alert alert-danger">{error}</div>}
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="pt-5">
              <ProposalCard
                proposalHeading={project.name}
                proposalDescription={project.description}
                projectId={project._id}
              />
            </div>
          ))
        ) : (
          <div className="pt-5">
            <h2>Hello World</h2>
          </div>
        )}

        <button
          onClick={handleCreateNewClick}
          className="btn btn-success mt-3"
        >
          Create New
        </button>
        <h4 className="fw-semibold mt-3">Project progress</h4>
        <ProgressCardsContainer projects={projects} />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
