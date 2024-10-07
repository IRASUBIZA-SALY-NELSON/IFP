import React, { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import styles from "./Profile.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import imagePlaceholder from "../../assets/contactImage.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const location = useLocation();
  const signupData = location.state?.signupData || {}; // Access signupData from location state
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [isCityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>(imagePlaceholder);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const provinces: Record<string, string[]> = {
    Kigali: ["Gasabo", "Kicukiro", "Nyarugenge"],
    Eastern: [
      "Rwamagana",
      "Kayonza",
      "Bugesera",
      "Nyagatare",
      "Gatsibo",
      "Ngoma",
      "Kirehe",
    ],
    Western: [
      "Rubavu",
      "Rusizi",
      "Nyabihu",
      "Nyamasheke",
      "Ngororero",
      "Karongi",
      "Rutsiro",
    ],
    Southern: [
      "Kamonyi",
      "Muhanga",
      "Ruhango",
      "Nyanza",
      "Huye",
      "Nyaruguru",
      "Gisagara",
      "Nyamagabe",
    ],
    Northern: ["Rulindo", "Gakenke", "Musanze", "Gicumbi", "Burera"],
  };

  const handleSelectedProvince = (province: string) => {
    setSelectedProvince(province);
    setCityOptions(provinces[province]);
    setSelectedCity(null);
    setIsProvinceDropdownOpen(false);
    setCityDropdownOpen(false);
  };

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city);
    setCityDropdownOpen(false);
  };

  const handleSelectedGender = (gender: string) => {
    setGender(gender);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvince || !selectedCity || !gender) {
      console.log("Please fill in all required fields.");
      return; // Prevent submission if fields are not filled
    }

    const accountData = {
      ...signupData, // Use the signup data from the previous form
      profileImage,
      province: selectedProvince,
      city: selectedCity,
      gender,
    };

    try {
      const response = await axios.post("http://localhost:5000/signup", accountData);
      console.log("Account created successfully:", response.data);
      navigate("/dashboard"); // Navigate to the dashboard on successful account creation
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className={`${styles.container} p-3`}>
      <h3 className="text-success fw-bold mb-5">Complete your profile</h3>
      <form onSubmit={handleSubmit}>
        <p className="d-block text-center fs-4 fw-semibold">Upload your profile picture</p>
        <div className="d-flex justify-content-center mb-3 position-relative">
          <div>
            <img
              src={profileImage}
              alt="Profile"
              style={{
                height: "200px",
                width: "200px",
                border: "2px solid green",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span
              onClick={() => inputRef.current?.click()}
              style={{ position: "absolute", bottom: "20px", right: "-10px" }}
            >
              <FiCamera size={30} color="green" />
            </span>
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleImageChange}
        />

        <p className="fs-5 fw-semibold mb-3">Select your Province</p>
        <div
          onClick={() => setIsProvinceDropdownOpen(!isProvinceDropdownOpen)}
          className={styles.dropdown}
        >
          <p className="fs-5 text-black">
            {selectedProvince ? selectedProvince : "Choose province"}
          </p>
          <span>
            {isProvinceDropdownOpen ? (
              <RxCaretDown size={30} />
            ) : (
              <RxCaretRight size={30} />
            )}
          </span>
        </div>
        {isProvinceDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {Object.keys(provinces).map((province) => (
              <p key={province} onClick={() => handleSelectedProvince(province)}>
                {province}
              </p>
            ))}
          </div>
        )}

        <p className="fs-5 fw-semibold mb-3">Select your City</p>
        <div
          onClick={() => setCityDropdownOpen(!isCityDropdownOpen)}
          className={styles.dropdown}
        >
          <p className="fs-5 text-black">
            {selectedCity ? selectedCity : "Choose city"}
          </p>
          <span>
            {isCityDropdownOpen ? (
              <RxCaretDown size={30} />
            ) : (
              <RxCaretRight size={30} />
            )}
          </span>
        </div>
        {isCityDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {cityOptions.map((city) => (
              <p key={city} onClick={() => handleSelectedCity(city)}>
                {city}
              </p>
            ))}
          </div>
        )}

        <p className="fs-5 fw-semibold mb-3">Gender</p>
        <div className="d-flex justify-content-start">
          <div
            onClick={() => handleSelectedGender("Male")}
            className="d-flex align-items-center mx-2"
          >
            <span className="mx-2">
              {gender === "Male" ? (
                <MdRadioButtonChecked color="green" size={25} />
              ) : (
                <MdRadioButtonUnchecked color="green" size={25} />
              )}
            </span>
            <p className="fs-5 text-black">Male</p>
          </div>

          <div
            onClick={() => handleSelectedGender("Female")}
            className="d-flex align-items-center mx-2"
          >
            <span className="mx-2">
              {gender === "Female" ? (
                <MdRadioButtonChecked color="green" size={25} />
              ) : (
                <MdRadioButtonUnchecked color="green" size={25} />
              )}
            </span>
            <p className="fs-5 text-black">Female</p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success px-5 py-2 fs-4">
            Complete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
