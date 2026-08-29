import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Router from "./Components/Router/Router";
import MobileNav from "./Components/MobileNav"; 
import WhatsAppButton from "./Components/WhatsAppButton";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
      <MobileNav /> 
      <WhatsAppButton/>
    </>
  );
}

export default App;