import React from "react";

export default function Navigation({ currentPage, selectedPage }) {
  return (
    <div className="container">
      <ul className="nav nav-tabs d-flex justify-content-evenly">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => selectedPage("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => selectedPage("Project")}
            className={
              currentPage === "Project" ? "nav-link active" : "nav-link"
            }
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => selectedPage("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
