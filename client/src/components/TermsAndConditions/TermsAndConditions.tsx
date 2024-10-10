import React from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./TermsAndConditions.module.css";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["back-button"]}`} onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h3 className="text-success mb-5 fw-semibold">Terms and conditions</h3>
      <div>
        <div>
          <h5>1. Introduction</h5>
          <p>
            Welcome to the Integrated Farming Project ("the Project"). By
            participating in the Project as a farmer or sponsor, you agree to
            abide by the following Terms and Conditions. These terms govern your
            participation, ensuring transparency , fairness, and mutual benefit
            for all parties involved.
          </p>
          <h5>2. Definitions</h5>
          <p>
            Farmer: A participant who engages in agricultural activities and
            receives financial or material support from sponsors. Sponso: An
            individual, organization, or entity that provides financial or
            material resources to support farmers' agricultural activities.
            Project: The Integrated Farming Project that facilitates
            collaboration between farmers and sponsors. Platform: The digital or
            physical medium through which the Project operates, including
            websites, applications, and other communication tools.
          </p>
          <h5>3. Eligibility</h5>
          <p>
            Must be legally eligible to own or operate farmland, possess basic
            farming knowledge, and agree to share necessary farming data with
            the Project and sponsors. Sponsors: Must be legally capable of
            entering into a contract and providing the agreed-upon financial or
            material resources. Both farmers and sponsors must register through
            the Project’s platform, providing accurate and verifiable
            information.
          </p>
          <h5>4. Project Participation</h5>
          <p>
            Farmers' Responsibilities: 1. Properly manage the resources provided
            by the sponsors for agricultural production. 2. Share regular
            updates, including progress reports, harvest yields, and any
            challenges encountered during the farming process. 3. Use the
            provided funds or materials strictly for farming purposes as
            outlined in the project plan. Sponsors' Responsibilities: 1. Provide
            timely financial support or material resources as agreed upon. 2.
            Communicate with farmers regularly, if needed, to ensure the success
            of the farming project. 3. Understand that agricultural activities
            may be affected by external factors such as weather, disease, and
            market fluctuations. 5. Payment and Funding Terms Funding Schedule:
            Sponsors must transfer funds according to the agreed payment
            schedule (e.g., in installments or lump sums). Usage of Funds: Funds
            are to be used exclusively for the farming activities as outlined in
            the Project. Misuse of funds by the farmer may result in termination
            of the agreement and possible legal action. Refund Policy: If a
            farming project is canceled before commencement or due to unforeseen
            circumstances, sponsors may be eligible for a partial or full
            refund, subject to Project review. 6. Risk and Liability Farmer
            Liability: Farmers are responsible for the proper use of resources
            and must adhere to best farming practices. Any negligence resulting
            in crop failure or loss of sponsor-provided materials may lead to
            removal from the Project. Sponsor Liability: Sponsors must
            understand that agriculture involves inherent risks, including
            unpredictable factors like weather conditions, pests, or market
            changes. The Project does not guarantee specific yields or profits.
            Force Majeure: Neither party shall be held liable for delays or
            failures in fulfilling their obligations due to events beyond their
            control (e.g., natural disasters, pandemics, government
            regulations). 7. Reporting and Accountability Farmers: Must submit
            regular progress reports to the Project management team and
            sponsors, detailing farm activities, expenditures, and outcomes.
            Sponsors: Have the right to request updates or visit the farm (if
            applicable and mutually agreed upon) to monitor progress. Project
            Team: Acts as an intermediary between the farmer and sponsor,
            ensuring transparency and addressing any disputes that may arise. 8.
            Intellectual Property All data, reports, and findings generated as
            part of the Project are the intellectual property of the Integrated
            Farming Project. Any use of this information for research,
            marketing, or publication requires prior written consent from the
            Project management team. 9. Termination Voluntary Termination:
            Either party may terminate their involvement in the Project by
            providing written notice, with the effective date of termination
            being agreed upon by both parties. Involuntary Termination: The
            Project management reserves the right to terminate any participant’s
            involvement if there is a breach of these terms, misuse of funds,
            failure to provide accurate reports, or any illegal activity. 10.
            Confidentiality - Both parties agree to maintain the confidentiality
            of any non-public information shared during the course of the
            Project. This includes financial details, personal data, and any
            proprietary farming methods or business strategies. 11. Dispute
            Resolution - Any disputes arising between farmers and sponsors will
            first be handled through mediation by the Project management team.
            If a resolution cannot be reached, the dispute will be subject to
            the laws of [Insert Jurisdiction], and legal proceedings may follow
            in the courts of [Insert Location]. 12. Amendments - The Project
            management team reserves the right to amend or update these Terms
            and Conditions at any time. Any changes will be communicated to the
            participants via the Platform, and continued participation in the
            Project will constitute acceptance of the revised terms. 13. Contact
            Information For any inquiries, disputes, or clarification regarding
            these Terms and Conditions, please contact us at ifp@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
