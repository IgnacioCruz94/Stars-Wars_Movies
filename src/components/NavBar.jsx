import React from "react";
//import Switch from "../components/Switch";
import DarkModeToggle from "../dark-light-Mode/index";

const logo =
  "https://www.nicepng.com/png/detail/425-4251660_darth-vader-head-png-darth-vader-png.png";

const navBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Stars Wars
        </a>
        <DarkModeToggle />
        {/* //<Switch /> */}
      </div>
    </nav>
  );
};

export default navBar;
