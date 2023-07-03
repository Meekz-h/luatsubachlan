import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage.js"
import Nav from "./components/nav/Nav.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/nav/Footer.js";
function App() {
  const [launchInfo, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Mainpage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
