import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupForm from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import AuthGuard from "./components/AuthGuard/AuthGuard"; // Import the AuthGuard component
import PageNotFound from "./components/PageNotFound/PageNotFound"; // Import PageNotFound
import UpdateFamily from "./components/FamilyPage/UpdateFamily";
import FamilyPortal from "./components/FamilyPage/FamilyPortal";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";

const App = () => {
  const notificationDay = new Date().toLocaleDateString();

  return (
    <div style={{ overflow: "hidden", boxSizing: "border-box" }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complete-profile" element={<Profile />} />
          <Route path="/funds/deposit/card" element={<FundProject />} />
          <Route path="/funds/deposit/amount" element={<ChooseAmount />} />
          <Route path="/funds/deposit/confirm-payment" element={<ConfirmPayment />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notifications" element={<Notification notificationDay={notificationDay} />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/dashboard" element={<Dashboard selectedTab={"All"} onTabChange={(tab) => {}} />} />
          <Route path="/sponsor-dashboard" element={<DashboardSponsors />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/family/update-family" element={<UpdateFamily />}></Route>
          <Route path="/family/portal" element={<FamilyPortal />}></Route>
          <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>

          {/* Protected Routes */}
          <Route
            path="/complete-profile"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
          <Route
            path="/funds/deposit/card"
            element={
              <AuthGuard>
                <FundProject />
              </AuthGuard>
            }
          />
          <Route
            path="/funds/deposit/amount"
            element={
              <AuthGuard>
                <ChooseAmount />
              </AuthGuard>
            }
          />
          <Route
            path="/funds/deposit/confirm-payment"
            element={
              <AuthGuard>
                <ConfirmPayment />
              </AuthGuard>
            }
          />
          <Route
            path="/contacts"
            element={
              <AuthGuard>
                <ContactForm />
              </AuthGuard>
            }
          />
          <Route
            path="/menu"
            element={
              <AuthGuard>
                <Menu />
              </AuthGuard>
            }
          />
          <Route
            path="/notifications"
            element={
              <AuthGuard>
                <Notification notificationDay={notificationDay} />
              </AuthGuard>
            }
          />
          <Route
            path="/my-profile"
            element={
              <AuthGuard>
                <MyProfile />
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard
                  selectedTab={"All"}
                  onTabChange={(tab: "All" | "Approved" | "Unapproved") => {
                    // Handle tab change
                  }}
                />
              </AuthGuard>
            }
          />
          <Route
            path="/sponsor-dashboard"
            element={
              <AuthGuard>
                <DashboardSponsors />
              </AuthGuard>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <AuthGuard>
                <UserDashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/project-description"
            element={
              <AuthGuard>
                <ProjectDesc />
              </AuthGuard>
            }
          />
          <Route
            path="/user-profile"
            element={
              <AuthGuard>
                <UserProfile />
              </AuthGuard>
            }
          />

          {/* Fallback Route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
