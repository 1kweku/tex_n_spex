import { useState } from "react";

import Navbar from "./navBar";
// import Footer from "./footer";

import Portfolio from "./pages/portfolio";
import Contact from "./pages/contactForm";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Services from "./pages/services";

export default function Website() {
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const pageHandler = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Registration") {
      return <Registration />;
    }
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Services") {
      return <Services />;
    }
  };

  return (
    <div>
      {<Navbar pageHandler={pageHandler} />}
      {renderPage()}
    </div>
  );
}
