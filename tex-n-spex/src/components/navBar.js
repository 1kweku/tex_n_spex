import React from "react";
// import Registration from "./registration";

export default function Navbar(props) {
  return (
    <nav className="nav">
      <ul>
        <ol className="nav-item" onClick={(e) => props.pageHandler("Home")}>
          <a href="#Home"> Home </a>
        </ol>
        <ol className="nav-item" onClick={(e) => props.pageHandler("Services")}>
          <a href="#Services"> Services </a>
        </ol>
        <ol
          className="nav-item"
          onClick={(e) => props.pageHandler("Portfolio")}
        >
          <a href="#Portfolio">Portfolio</a>
        </ol>
        <ol className="nav-item" onClick={(e) => props.pageHandler("Contact")}>
          <a href="#Contact">Contact</a>
        </ol>
        <ol
          className="nav-item"
          onClick={(e) => props.pageHandler("Registration")}
        >
          <a href="#Registration">Registration</a>
        </ol>
      </ul>
      {/* <div>
        <Registration />
      </div> */}
    </nav>
  );
}
