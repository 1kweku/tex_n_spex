import React from "react";
import logo from "./pictures/TNS_3.png";
// import Registration from "./registration";

export default function Navbar(props) {
  return (
    <nav className="nav" 
      style= {{
        backgroundColor: "grey",
        textAlign: "center",
        marginRight: 0,
        marginLeft: "auto",
        border: "1px solid red",
      }}
    >

      <img src={logo} className="logo" height="200px" width="200px" alt="Tex N Spex Logo" />
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
