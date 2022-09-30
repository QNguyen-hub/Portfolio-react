import React, { useState } from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import Home from "./Home";
import Contact from "./Contact";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const selectedPage = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="d-flex justify-content-evenly border border-primary rounded p-2 m-2">
        <p>Quy Nguyen</p>
        <Navigation currentPage={currentPage} selectedPage={selectedPage} />
      </div>
      <div
        className="container d-flex flex-wrap justify-content-evenly"
        style={{ border: "1px solid red" }}
      >
        {renderPage()}
      </div>
    </div>
  );
}
