import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import ScrollToTop from "./landing-page/components/ScrollToTop";
import EmployeeForm from "./clients/employee/EmployeeForm";
import CompanyFormSignup from "./clients/company/CompanyFormSignup";
import CompanyFormLogin from "./clients/company/CompanyFormLogin";
import Candidats from "./clients/employee/Candidats";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/candidatures" element={<Candidats />}/>
      <Route path="/client/employee" element={<EmployeeForm />}/>
      <Route path="/client/company/signup" element={<CompanyFormSignup />}/>
      <Route path="/client/company/login" element={<CompanyFormLogin />}/>
    </Routes>
    </>
  );
}

export default App;
