import React, { useEffect } from "react";
import "./Header.css";
export default function Header() {
  let toggle = true;
  const changeTheme = (e) => {
    const themeSpan = document.querySelector(".themeSpan");
    if (toggle) {
      themeSpan.style.cssText = "transform: translateX(0rem);";
      sessionStorage.setItem("mainColor", "#000");
      sessionStorage.setItem("textColor", "#fff");
      sessionStorage.setItem("hoverColor", "#b5b5b5");
      sessionStorage.setItem("shadowColor", "#000");
      sessionStorage.setItem("toggle", toggle);

      document.documentElement.style.setProperty("--main-color", "#000");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--hover-color", "#b5b5b5");
      document.documentElement.style.setProperty("--shadow-color", "#000");

      toggle = !toggle;
    } else {
      themeSpan.style.cssText = "transform: translateX(2.5rem);";
      sessionStorage.setItem("mainColor", "#fff");
      sessionStorage.setItem("textColor", "#000");
      sessionStorage.setItem("hoverColor", "#f6f6f6");
      sessionStorage.setItem("shadowColor", "#ddd");
      sessionStorage.setItem("toggle", toggle);

      document.documentElement.style.setProperty("--main-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--hover-color", "#f6f6f6");
      document.documentElement.style.setProperty("--shadow-color", "#ddd");
      toggle = !toggle;
    }
  };
  useEffect(() => {
    let sessionToggle = sessionStorage.getItem("toggle");
    const themeSpan = document.querySelector(".themeSpan");
    if (sessionToggle !== null) {
      if (sessionToggle === "true") {
        toggle = false;
        themeSpan.style.cssText = "transform: translateX(0rem);";
        document.documentElement.style.setProperty("--main-color", "#000");
        document.documentElement.style.setProperty("--text-color", "#fff");
        document.documentElement.style.setProperty("--hover-color", "#b5b5b5");
        document.documentElement.style.setProperty("--shadow-color", "#000");
      } 
      // if not the default theme is already exist
    }
  }, []);
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
          <img src="/dashboard/images/activity-02.png" alt="a" />
        </div>
      </div>
    </header>
  );
}
