import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About_us.jsx";
import Home from "./components/main";
import NewsP from "./components/News-page";
import LogIn from "./components/log-in-phone";
import LgiPop from "./components/log-in-pop";
import PhonePage from "./components/Phones";
import Adminarticle from "./components/adminPages/adminArticle";
import AdminPhonedata from "./components/adminPages/adminPhones";
import AdminContactUs from "./components/adminPages/contactUsadmin";
import CntctusExt from "./components/ContactusExt";
import PhoneDetails from "./components/PhoneDetails";
import Dashboard from "./components/adminPages/Dashboard";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/contactus" element={<CntctusExt />} />
        <Route exact path="/news" element={<NewsP />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/phones" element={<PhonePage />} />
        <Route exact path="/adminarticle" element={<Adminarticle />} />
        <Route exact path="/admincontactus" element={<AdminContactUs />} />
        <Route exact path="/adminphonedata" element={<AdminPhonedata />} />
        <Route exact path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
      <LgiPop />
    </BrowserRouter>
  );
}

export default App;
