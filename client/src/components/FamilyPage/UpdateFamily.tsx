
 //@ts-ignore
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styles from "./UpdateFamily.module.css";
import PhotoUpload from "./PhotoUpload";

const UpdateFamily = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["back-button"]}`} onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h3 className="text-success mb-5 fw-semibold">Update family</h3>
      <div>
        <p>
          Enjoy unlimited update about your family issues through using ifp
          update feature
        </p>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3 rounded-5"
              placeholder="Enter your names"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3 rounded-5"
              placeholder="Enter the names of the family leader"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3 rounded-5"
              placeholder="Enter total family number"
            />
          </div>
          <p>Choose your family photos</p>
          <div>
            <PhotoUpload />
            <PhotoUpload />
            <PhotoUpload />
          </div>
          <div>
            <button type="submit" className="btn btn-success w-100 fw-semibold pt-2 p-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFamily;
