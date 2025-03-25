import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Insights from './pages/Insights';
import ContactUs from './pages/ContactUs';
import Approach from './pages/Approach'
import Footer from './pages/Footer';
import Team from './pages/Team';
import DirectTaxation from './components/DirectTaxation';
import AccountingBookkeeping from './components/AccountingBookkeeping';
import AuditAssurance from './components/AuditAssurance';
import BusinessAdvisory from './components/BusinessAdvisory';
import ForeignExchangeMatters from './components/ForeignExchangeMatters';
import GSTIndirectTaxes from './components/GSTIndirectTaxes';
import InternationalTaxationFEMA from './components/InternationalTaxationFEMA';
import StartupSMEServices from './components/StartupSMEServices';
import Layout from './components/Layout';
import Solutions from './pages/Solutions';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <div style={styles.container}>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/DirectTaxation" element={<DirectTaxation />} />
          <Route path="/AccountingBookkeeping" element={<AccountingBookkeeping />} />
          <Route path="/AuditAssurance" element={<AuditAssurance />} />
          <Route path="/BusinessAdvisory" element={<BusinessAdvisory />} />
          <Route path="/ForeignExchangeMatters" element={<ForeignExchangeMatters />} />
          <Route path="/GSTIndirectTaxes" element={<GSTIndirectTaxes />} />
          <Route path="/InternationalTaxationFEMA" element={<InternationalTaxationFEMA />} />
          <Route path="/StartupSMEServices" element={<StartupSMEServices />} />
          <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '30px auto',
    maxWidth: '1200px', // This ensures your content is centered and doesn't stretch too much on large screens
  },
};

export default App;