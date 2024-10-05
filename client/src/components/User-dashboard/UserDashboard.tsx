import ProposalCard from "../Dashboard/ProposalCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProgressCardsContainer from "./Re_usageComp/ProgressCardsContainer";

const UserDashboard = () => {
  return (
    <div className="p-3">
      <Header />
      <div className="mt-5">
        <div className="pt-5">
          <ProposalCard
            proposalHeading="The animal food support project"
            proposalDescription="This project aims at producing adequate food supplies to farmers and
            other users."
          />
        </div>
        <h4 className="fw-semibold mt-3">Project progress</h4>
        <ProgressCardsContainer />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
