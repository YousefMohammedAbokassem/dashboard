import React, { useEffect } from "react";
import "./Header.css";
export default function Header() {
  let toggle = true;
  const changeTheme = (e) => {
    const themeSpan = document.querySelector(".themeSpan");
    if (toggle) {
      themeSpan.style.cssText = "transform: translateX(0rem);";
      toggle = !toggle;
    } else {
      themeSpan.style.cssText = "transform: translateX(2.5rem);";
      toggle = !toggle;
    }
  };
  useEffect(() => {}, []);
  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-4">
      <div className="searchInput d-flex justify-content-center align-items-center position-relative">
        <i className="fa-solid fa-magnifying-glass searchIcon "></i>
        <input
          className="pe-4 py-2"
          type="search"
          placeholder="Type A Keyword"
        />
      </div>
      <div className="d-flex align-items-center account">
        <div className="LightNight position-relative " onClick={changeTheme}>
          <span className="position-absolute themeSpan"></span>
          <i className="fa-solid fa-moon  px-2 night theme"></i>
          <i className="fa-regular fa-sun px-2 light theme"></i>
        </div>
        <span className="me-2 position-relative">
          <i className="fa-regular fa-bell fa-lg notification"></i>
        </span>
        <div className="accountImage">
          <img src="/dashboard/images/me.png" alt="a" />
        </div>
      </div>
    </header>
  );
}
