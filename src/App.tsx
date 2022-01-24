import { createContext, useEffect, useMemo, useState } from "react";
import React from "react";

import { HomePage } from "./pages/homePage.page";
import { ServicePage } from "./pages/service.page";
import { AboutMePage } from "./pages/aboutMe.page";
import { ContactPage } from "./pages/contact.page";

import { NavBar } from "./components/nav-bar.component";
import { Hamburger } from "./components/hamburger.component";
import { Footer } from "./components/footer.component";
import { Routes, Route } from "react-router";
import { SuccessPage } from "./pages/success.page";
import { ErrorPage } from "./pages/error.page";

export const languageContext = createContext({
  language: "",
  setLanguage: (e: string) => {},
});

function App() {
  const [isMobileView, setIsMobileView] = useState(true);
  const [language, setLanguage] = useState("English");
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    mql.addEventListener("change", (e) => {
      const desktopView = e.matches;
      if (desktopView) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    });
    if (screen.width < 768) {
      setIsMobileView(false);
    }
  }, []);

  return (
    <languageContext.Provider value={value}>
      <div>
        {isMobileView ? <NavBar /> : <Hamburger />}

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutMePage />}></Route>
          <Route path="/service/*" element={<ServicePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </languageContext.Provider>
  );
}

export default App;
