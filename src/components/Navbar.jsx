import React from "react";
import logo from "../assets/logo/stacks-logo.svg";

function Navbar() {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <a href="/homepage">
            {" "}
            <img src={logo} alt="logo" width={150} />
          </a>
        </li>
        <li>
          <a href="/features"></a>Features
        </li>
   
        <li>
          <a href="/teams"></a>For Teams
        </li>
        <li>
          <a href="/pricing"></a>Pricing
        </li>
        <li>
          <a href="/pricing"></a>About
        </li>
      </ul>

      <ul className="nav-bar2">
        {" "}
        <li>
          <a href="/"></a>Log in
        </li>
        <li>
          <a href="/start"></a>Start for Free
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
