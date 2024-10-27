 //@ts-ignore
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./ProjectDesc.module.css";
import axios from "axios";

// Define the Project interface
interface Project {
  name: string;
  imageUrl: string;
  description: string;
  startDate: string; // Assuming date is in string format
  endDate: string;   // Assuming date is in string format
}

const ProjectDesc = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  const parseDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/project/${projectId}`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleBack = () => navigate(-1);
  const goToFundPage = () => navigate("/funds/deposit/card");
  const handleNotFound = () => setShowModal(true);
  const handleConfirmCancel = () => {
    setShowModal(false);
    navigate("/user-dashboard");
  };
  const handleCloseModal = () => setShowModal(false);

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (error || !project) {
    return <div>Error loading project or project not found.</div>;
  }

  return (
    <div className="p-3 pt-3">
      <div className="d-flex justify-content-evenly">
        <div className="back-button" onClick={handleBack}>
          <PiCaretLeftBold color="green" size={30} />
        </div>
        <h1>Project Description</h1>
      </div>
      <h3 className="text-center mt-3 text-success">{project.name}</h3>
      <div>
        <div>
          <img
            src={project.imageUrl}
            alt="Project"
            className={`${styles["project-image"]}`}
          />
        </div>
        <p className="mt-3 p-3">{project.description}</p>
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-semibold text-success d-block">Project Start</span>
            <span>{parseDate(project.startDate)}</span>
          </div>
          <div>
            <span className="fw-semibold text-success d-block">Project End</span>
            <span>{parseDate(project.endDate)}</span>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="fw-semibold text-success">Make an action</h5>
          <div className="d-flex">
            <button className="btn btn-success fw-semibold p-2 mx-3" onClick={goToFundPage}>
              Fund
            </button>
            <button className="btn btn-danger fw-semibold mx-3 p-2" onClick={handleNotFound}>
              Not Fund
            </button>
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cancel Funding</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to cancel funding for this project?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="success" onClick={handleConfirmCancel}>Yes, Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectDesc;
