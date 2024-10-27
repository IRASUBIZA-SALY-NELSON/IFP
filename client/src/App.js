import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
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
const App = () => {
    const { formData } = useContext(SignUpContext);
    const signupData = {
        name: formData.username || "",
        email: formData.email || "",
    };
    return (_jsx("div", { className: "outside-div", children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(WelcomePage, {}) }), _jsx(Route, { path: "/family-portal", element: _jsx(FamilyPortal, {}) }), _jsx(Route, { path: "/register", element: _jsx(SignupForm, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/complete-profile", element: _jsx(Profile, { signupData: signupData }) }), _jsx(Route, { path: "/funds/deposit/card", element: _jsx(FundProject, {}) }), _jsx(Route, { path: "/funds/deposit/amount", element: _jsx(ChooseAmount, {}) }), _jsx(Route, { path: "/funds/deposit/confirm-payment", element: _jsx(ConfirmPayment, {}) }), _jsx(Route, { path: "/contacts", element: _jsx(ContactForm, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Menu, {}) }), _jsx(Route, { path: "/notifications", element: _jsx(Notification, { notificationDay: new Date().toLocaleDateString() }) }), _jsx(Route, { path: "/my-profile", element: _jsx(MyProfile, {}) }), _jsx(Route, { path: "/sponsor-dashboard", element: _jsx(DashboardSponsors, {}) }), _jsx(Route, { path: "/user-dashboard", element: _jsx(UserDashboard, {}) }), _jsx(Route, { path: "/project/:projectId", element: _jsx(ProjectDesc, {}) }), _jsx(Route, { path: "/user-profile", element: _jsx(UserProfile, {}) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, { selectedTab: "All", onTabChange: () => { } }) }), _jsx(Route, { path: "*", element: _jsx(PageNotFound, {}) }), _jsx(Route, { path: "/create-project", element: _jsx(CreateProject, {}) })] }) }) }));
};
export default App;
