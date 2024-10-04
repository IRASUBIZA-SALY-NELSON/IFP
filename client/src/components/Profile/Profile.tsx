import React, { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import styles from "./Profile.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import imagePlaceholder from "../../assets/contactImage.png";

const Profile: React.FC = () => {
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [isCityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>(imagePlaceholder);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const accordions = [
    { id: 1, className: "bg-success-subtle"},
    { id: 2, className: "bg-success"}
  ]

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

  const toggleCityDropdown = () => {
    if (selectedProvince) {
      setCityDropdownOpen((prev) => !prev);
      if (isProvinceDropdownOpen) setIsProvinceDropdownOpen(false);
    }
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

  return (
    <div className={`${styles.container} p-3`}>
      <div>
        <h3 className="text-success fw-bold mb-5">Complete your profile</h3>
        <div className="d-flex mb-3">
          {accordions.map(accordion => (
            <div className={`${styles.accordion} ${accordion.className}`} key={accordion.id}></div>
          ))}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
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
                      console.log("clicked");
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
                onClick={toggleCityDropdown}
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

          <p className="text-center fs-3 fw-semibold mt-3">
            Select your gender
          </p>
          <div className="d-flex justify-content-center">
            <div
              className="d-flex mx-4"
              onClick={() => handleSelectedGender("Male")}
            >
              <span className={styles.icon}>
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
            <input type="text" className="form-control border border-success border-2" />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success rounded-5 p-2 fw-semibold fs-3 mb-3">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
