import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiLogIn } from "react-icons/fi";
import { StyledNav } from "./Nav.styles";

const Nav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeBg);
  }, []);
  return (
    <StyledNav>
      <nav className={nav ? "dark" : "transparent"}>
        <div className="nav-items">
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
          <h3>Browse</h3>
          <ul>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/tv-shows" activeClassName="active">
              TV Shows
            </NavLink>
            <NavLink to="/movies" activeClassName="active">
              Movies{" "}
            </NavLink>
            <NavLink to="/news" activeClassName="active">
              News & Popular{" "}
            </NavLink>
          </ul>
        </div>
        <div className="search-login">
          <FiSearch className="icon" />
          <FiLogIn className="icon" />
        </div>
      </nav>
    </StyledNav>
  );
};

export default Nav;
