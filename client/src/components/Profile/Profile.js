import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import styles from "./Profile.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import imagePlaceholder from "../../assets/contactImage.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Profile = ({ signupData }) => {
    const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [isDistrictDropdownOpen, setDistrictDropdownOpen] = useState(false);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [gender, setGender] = useState(null);
    const [profileImage, setProfileImage] = useState(imagePlaceholder);
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const provinces = {
        Kigali: ["Gasabo", "Kicukiro", "Nyarugenge"],
        Eastern: ["Rwamagana", "Kayonza", "Bugesera", "Nyagatare", "Gatsibo", "Ngoma", "Kirehe"],
        Western: ["Rubavu", "Rusizi", "Nyabihu", "Nyamasheke", "Ngororero", "Karongi", "Rutsiro"],
        Southern: ["Kamonyi", "Muhanga", "Ruhango", "Nyanza", "Huye", "Nyaruguru", "Gisagara", "Nyamagabe"],
        Northern: ["Rulindo", "Gakenke", "Musanze", "Gicumbi", "Burera"],
    };
    const handleSelectedProvince = (province) => {
        setSelectedProvince(province);
        setDistrictOptions(provinces[province]);
        setSelectedDistrict(null);
        setIsProvinceDropdownOpen(false);
        setDistrictDropdownOpen(false);
    };
    const handleSelectedDistrict = (district) => {
        setSelectedDistrict(district);
        setDistrictDropdownOpen(false);
    };
    const handleSelectedGender = (gender) => {
        setGender(gender);
    };
    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedProvince || !selectedDistrict || !gender) {
            console.log("Please fill in all required fields.");
            return;
        }
        const accountData = {
            ...signupData,
            profileImage,
            province: selectedProvince,
            district: selectedDistrict,
            gender,
        };
        try {
            const response = await axios.post("http://localhost:5000/register", accountData);
            console.log("Account created successfully:", response.data);
            navigate("/user-dashboard");
        }
        catch (error) {
            const axiosError = error;
            if (axiosError.response) {
                console.error("Error creating account:", axiosError.response.data);
            }
            else {
                console.error("Error creating account:", axiosError.message);
            }
        }
    };
    return (_jsxs("div", { className: `${styles.container} p-3`, children: [_jsx("h3", { className: "text-success fw-bold mb-5", children: "Complete your profile" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("p", { className: "d-block text-center fs-4 fw-semibold", children: "Upload your profile picture" }), _jsx("div", { className: "d-flex justify-content-center mb-3 position-relative", children: _jsxs("div", { children: [_jsx("img", { src: profileImage, alt: "Profile", style: {
                                        height: "200px",
                                        width: "200px",
                                        border: "2px solid green",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    } }), _jsx("span", { onClick: () => inputRef.current?.click(), style: { position: "absolute", bottom: "20px", right: "-10px" }, children: _jsx(FiCamera, { size: 30, color: "green" }) })] }) }), _jsx("input", { type: "file", accept: "image/*", style: { display: "none" }, ref: inputRef, onChange: handleImageChange }), _jsx("p", { className: "fs-5 fw-semibold mb-3", children: "Select your Province" }), _jsxs("div", { onClick: () => setIsProvinceDropdownOpen(!isProvinceDropdownOpen), className: styles.dropdown, children: [_jsx("p", { className: "fs-5 text-black", children: selectedProvince ? selectedProvince : "Choose province" }), _jsx("span", { children: isProvinceDropdownOpen ? _jsx(RxCaretDown, { size: 30 }) : _jsx(RxCaretRight, { size: 30 }) })] }), isProvinceDropdownOpen && (_jsx("div", { className: styles.dropdownMenu, children: Object.keys(provinces).map((province) => (_jsx("p", { onClick: () => handleSelectedProvince(province), children: province }, province))) })), _jsx("p", { className: "fs-5 fw-semibold mb-3", children: "Select your district" }), _jsxs("div", { onClick: () => setDistrictDropdownOpen(!isDistrictDropdownOpen), className: styles.dropdown, children: [_jsx("p", { className: "fs-5 text-black", children: selectedDistrict ? selectedDistrict : "Choose district" }), _jsx("span", { children: isDistrictDropdownOpen ? _jsx(RxCaretDown, { size: 30 }) : _jsx(RxCaretRight, { size: 30 }) })] }), isDistrictDropdownOpen && (_jsx("div", { className: styles.dropdownMenu, children: districtOptions.map((district) => (_jsx("p", { onClick: () => handleSelectedDistrict(district), children: district }, district))) })), _jsx("p", { className: "fs-5 fw-semibold mb-3", children: "Gender" }), _jsxs("div", { className: "d-flex justify-content-start", children: [_jsxs("div", { onClick: () => handleSelectedGender("Male"), className: "d-flex align-items-center mx-2", children: [_jsx("span", { className: "mx-2", children: gender === "Male" ? (_jsx(MdRadioButtonChecked, { color: "green", size: 25 })) : (_jsx(MdRadioButtonUnchecked, { color: "green", size: 25 })) }), _jsx("p", { className: "fs-5 text-black", children: "Male" })] }), _jsxs("div", { onClick: () => handleSelectedGender("Female"), className: "d-flex align-items-center mx-2", children: [_jsx("span", { className: "mx-2", children: gender === "Female" ? (_jsx(MdRadioButtonChecked, { color: "green", size: 25 })) : (_jsx(MdRadioButtonUnchecked, { color: "green", size: 25 })) }), _jsx("p", { className: "fs-5 text-black", children: "Female" })] })] }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx("button", { type: "submit", className: "btn btn-success px-5 py-2 fs-4", children: "Complete" }) })] })] }));
};
export default Profile;
