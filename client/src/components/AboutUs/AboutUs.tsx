import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className={`aboutUs ${styles.aboutUs} fs-4 fw-semibold px-5 p-3`}>
        About Us
      </div>
      <div className={`d-flex justify-content-center p-4`}>
        <img src="" alt="" className={`${styles.profileImg}`} />
      </div>
      <div className="px-5">
        <h3 className="fw-semibold">What we do</h3>
        <p className="fs-5">
          We are dedicated software aiming to create a simple way of connecting farmers and their sponsors, making people happy and impressed.
        </p>
      </div>
      <div className="Faq-section"></div>
      <Footer />
    </div>
  );
};

export default AboutUs;
