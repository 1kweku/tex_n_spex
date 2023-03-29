import React from "react";
import logo from "./pictures/TNS_2.png";
import "./css/App.css";
// import Registration from "./registration";

export default function Navbar(props) {
  return (
    <nav className="nav" 
      style= {{
        backgroundColor: "grey",
        textAlign: "left",
        display : "block",
        marginRight: 0,
        marginLeft: "auto",
        border: "1px solid red",
      }}
    >

      <img src={logo} className="logo" height="150px" width="150px" alt="Tex N Spex Logo" style={{
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        position: "relative",
        left: 30,
        right: 40,
      }} />
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
