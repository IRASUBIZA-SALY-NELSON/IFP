import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupForm from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { SignUpContext } from "./contexts/SignUpContext";
import Notification from "./components/Notification/NotificationList";
import FundProject from "./components/FundProject/FundProject";
import ChooseAmount from "./components/FundProject/ChooseAmount";
import ConfirmPayment from "./components/FundProject/ConfirmPayment";
import Menu from "./components/Menu/Menu";
import MyProfile from "./components/MyProfile/MyProfile";
import Dashboard from "./components/Dashboard/Approval";
import Profile from "./components/Profile/Profile";
import ContactForm from "./components/Contacts/ContactForm";
import ProjectDesc from "./components/ProjectDescription/ProjectDesc";
import DashboardSponsors from "./components/Dashboard-sponsors/DashboardSponsors";
import AboutUs from "./components/AboutUs/AboutUs";
import UserProfile from "./components/UserProfile/UserProfile";
import UserDashboard from "./components/User-dashboard/UserDashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import FamilyPortal from './components/FamilyPage/FamilyPortal';
import CreateProject from './components/NewProject/CreateProject';

interface SignupData {
  username: string;
  email: string;
  password: string;
}

const App = () => {
  const { formData } = useContext(SignUpContext);

  const signupData: SignupData = {
    username: formData.username || "",
    email: formData.email || "",
    password: formData.password || "",
  };

  return (
    <div className="outside-div">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/family-portal" element={<FamilyPortal />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complete-profile" element={<Profile signupData={signupData} />} />
          <Route path="/funds/deposit/card" element={<FundProject />} />
          <Route path="/funds/deposit/amount" element={<ChooseAmount />} />
          <Route path="/funds/deposit/confirm-payment" element={<ConfirmPayment />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notifications" element={<Notification notificationDay={new Date().toLocaleDateString()} />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/sponsor-dashboard" element={<DashboardSponsors />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/project/:projectId" element={<ProjectDesc />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard selectedTab={"All"} onTabChange={() => {}} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
