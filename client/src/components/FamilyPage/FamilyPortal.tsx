
 //@ts-ignore
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import family from "../../assets/fam 1.jpg";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const FamilyPortal = () => {
  return (
    <div className="d-flex align-items-center flex-column">
      <div className="mb-5">
        <Header />
      </div>
      <div className="container-fluid px-3 mt-4">
        <h3 className="mt-5">Family Portal</h3>
        <div>
          <img src={family} className="w-100 h-auto" alt="" />
          <p className="fw-medium">
            Welcome to the family portal where you are able to view all your
            family members
          </p>
          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <h5 className="fw-semibold text-success mb-1">NGABO Oreste</h5>
                <p className="mb-0">Family leader</p>
              </div>
              <div>
                <button className="btn btn-success w-auto px-3 pt-2 pb-2">
                  Update family
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center bg-success-subtle p-2 text-center rounded-5 w-50 mt-3">
              <PiUsersThreeBold size={33} className="ms-3" />{" "}
              <span className="mx-3 fs-6">5 members</span>
            </div>
            <div className="mt-3">
              <p className="fw-semibold fs-5">Recent Family Information</p>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <p className="fw-semibold ">Before</p>
                  <Link
                    to={"/family/update-family"}
                    className="text-decoration-none text-success"
                  >
                    Edit
                  </Link>
                </div>
                <img src={family} className="w-100 h-auto" alt="" />
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <p className="fw-semibold ">Present</p>
                  <Link
                    to={"/family/update-family"}
                    className="text-decoration-none text-success"
                  >
                    Edit
                  </Link>
                </div>
                <img src={family} className="w-100 h-auto" alt="" />
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <p className="fw-semibold ">Future</p>
                  <Link
                    to={"/family/update-family"}
                    className="text-decoration-none text-success"
                  >
                    Edit
                  </Link>
                </div>
                <img src={family} className="w-100 h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FamilyPortal;
