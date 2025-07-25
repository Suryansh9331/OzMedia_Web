// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ItServicesPage from "../pages/ItServices";
import AboutUs from "../pages/AboutUs";
import MarketingServicesPage from "../pages/Marketing/index.jsx";
import ContactUsPage from "../pages/ContactUs";
import OurTeamsPage from "../pages/OurTeams";
import PrivacyPolicy from "../pages/PrivacyPolicy/Privacy.jsx";
import ScrollToTop from "../components/common/Scrolltotop.jsx";
import Departments from "../pages/Departments/index.jsx";
const AppRoutes = () => {
  return (
   <div>
   
   <Routes>
  
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/it-services" element={<ItServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/digital-marketing" element={<MarketingServicesPage />} />
        <Route path="/our-teams" element={<OurTeamsPage />} />
        <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
        <Route path="/organization-departments" element={< Departments/>} />
      </Route>
    </Routes>
    </div>
  );
};

export default AppRoutes;
