 //@ts-ignore
import { useState } from "react";
import "./styles.css";
import { PiCaretLeftBold } from "react-icons/pi";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface ProjectData {
  name: string;
  description: string;
  images: string[];
  startDate: string;
  endDate: string;
  landSize: number;
}

const CreateProject = () => {
  const [projectData, setProjectData] = useState<ProjectData>({
    name: "",
    description: "",
    images: [],
    startDate: "",
    endDate: "",
    landSize: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectData({
      ...projectData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setProjectData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...filesArray],
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setProjectData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formattedData = {
    ...projectData,
    startDate: new Date(projectData.startDate).toISOString(),
    endDate: new Date(projectData.endDate).toISOString(),
  };
  console.log("Form data:", formattedData);

    try {
      const response = await fetch("http://localhost:5000/add-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const result = await response.json();
      console.log("Project created:", result);

      // Redirect or show a success message after submission
      navigate("/user-dashboard"); // For example, navigate to dashboard after submission
    } catch (error: any) {
      console.error("Error:", error);
      setError("Failed to create the project.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container p-3">
      <div className="back-button" onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h1>Create new project</h1>
      <form onSubmit={handleSubmit} className="mt-3 p-2">
        <div className="input-group">
          <label htmlFor="name" className="fs-4">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description" className="fs-4">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="images" className="fs-5">
            Upload Images
          </label>
          <div className="image-upload">
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="images-grid">
          {projectData.images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={image}
                alt={`Uploaded ${index}`}
                className="grid-image mb-3"
              />
              <button title="please"
                className="close-button bg-secondary"
                onClick={() => handleRemoveImage(index)}
              >
                <BsX size={30} />
              </button>
            </div>
          ))}
        </div>
        <div className="input-group">
          <label htmlFor="startDate" className="fs-5">
            Start date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={projectData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="endDate" className="fs-5">
            End date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={projectData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="landSize" className="fs-5">
            Land size
          </label>
          <div className="number-input">
            <input
              type="number"
              id="landSize"
              name="landSize"
              className="p-1 border-0 mx-3"
              value={projectData.landSize}
              onChange={handleChange}
            />
            <span>km</span>
          </div>
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className="d-flex justify-content-center">
          <button type="submit" className="buttonSubmit rounded-5" disabled={loading}>
            {loading ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
