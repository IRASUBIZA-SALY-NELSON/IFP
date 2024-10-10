import React, { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import styles from "./Profile.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import imagePlaceholder from "../../assets/contactImage.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  const Profile: React.FC<{ signupData: any }> = ({ signupData }) => {
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

  const toggleProvinceDropdown = () => {
    setIsProvinceDropdownOpen((prev) => !prev);
    if (isCityDropdownOpen) setCityDropdownOpen(false);
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
      ...signupData, // Get the data from the signup form
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
        <p className="d-block text-center fs-4 fw-semibold">
          Upload your profile picture
        </p>
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
              }}
            />
            <label
              htmlFor="upload-profile"
              className={`${styles.cameraIcon}`}
            >
              <FiCamera
                size={40}
                onClick={() => {
                  if (inputRef) {
                    inputRef.current?.click();
                  }
                }}
                color="gray"
              />
            </label>
            <input
              id="upload-profile"
              type="file"
              accept="image/*"
              ref={inputRef}
              hidden
              onChange={handleImageChange}
            />
          </div>
        </div>

        <p className="text-center fw-semibold fs-3">Choose your location</p>
        <div className="d-flex justify-content-between">
          <div>
            <button
              className={`${styles.province} fw-semibold fs-4`}
              onClick={toggleProvinceDropdown}
            >
              {selectedProvince || "Province"}
              {isProvinceDropdownOpen ? (
                <RxCaretDown size={40} color="green" />
              ) : (
                <RxCaretRight size={40} color="green" />
              )}
            </button>
            {isProvinceDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {Object.keys(provinces).map((province) => (
                  <li key={province}>
                    <button
                      className={styles.dropdownItem}
                      onClick={() => handleSelectedProvince(province)}
                    >
                      {province}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button
              className={`${styles.city} fw-semibold fs-4`}
              onClick={() => {
                if (selectedProvince) {
                  setCityDropdownOpen((prev) => !prev);
                  if (isProvinceDropdownOpen) setIsProvinceDropdownOpen(false);
                }
              }}
              disabled={!selectedProvince}
            >
              {selectedCity || "City"}
              {!isCityDropdownOpen ? (
                <RxCaretRight size={40} color="green" />
              ) : (
                <RxCaretDown size={40} color="green" />
              )}
            </button>
            {isCityDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {cityOptions.map((city) => (
                  <li key={city}>
                    <button
                      className={styles.dropdownItem}
                      onClick={() => handleSelectedCity(city)}
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="text-center fs-3 fw-semibold mt-3">Select your gender</p>
        <div className="d-flex justify-content-center">
          <div
            className="d-flex mx-4"
            onClick={() => handleSelectedGender("Male")}
          >
            <span>
              {gender === "Male" ? (
                <MdRadioButtonChecked size={30} color="green" />
              ) : (
                <MdRadioButtonUnchecked size={30} color="green" />
              )}
            </span>
            <p className="fs-3 mx-2">Male</p>
          </div>
          <div
            className="d-flex"
            onClick={() => handleSelectedGender("Female")}
          >
            <span>
              {gender === "Female" ? (
                <MdRadioButtonChecked size={30} color="green" />
              ) : (
                <MdRadioButtonUnchecked size={30} color="green" />
              )}
            </span>
            <p className="fs-3 mx-2">Female</p>
          </div>
        </div>

        <p className="text-center fs-3 fw-semibold">Bank Account Number</p>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control border border-success border-2"
          />
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-success rounded-5 p-2 fw-semibold fs-3 mb-3"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
