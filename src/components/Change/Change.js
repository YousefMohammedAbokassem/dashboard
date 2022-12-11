import React, { useEffect } from "react";

export default function Change({ classAll }) {
  let toggle = true;
  const changeTheme = (e) => {
    const themeSpan = document.querySelectorAll(".themeSpan");
    const themDiv = document.querySelectorAll(".themDiv");
    if (toggle) {
      // themeSpan.style.
      //   themeSpan.style.cssText = "transform: translateX(0rem);";
      themDiv[0].style.cssText = "transform: translate(-50%, 32px);";
      themeSpan[1].style.cssText = "transform: translateX(0rem);";
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
      themDiv[0].style.cssText = "transform: translate(-50%, 0px);";
      themeSpan[1].style.cssText = "transform: translateX(2.5rem);";

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
    const themDiv = document.querySelectorAll(".themDiv");

    if (sessionToggle !== null) {
      if (sessionToggle === "true") {
        toggle = false;
        themeSpan.style.cssText = "transform: translateX(0rem);";
        themDiv[0].style.cssText = "transform: translate(-50%, 32px);";
        document.documentElement.style.setProperty("--main-color", "#000");
        document.documentElement.style.setProperty("--text-color", "#fff");
        document.documentElement.style.setProperty("--hover-color", "#b5b5b5");
        document.documentElement.style.setProperty("--shadow-color", "#000");
      }
      // if not the default theme is already exist
    }
  }, []);
  return (
    <div className={classAll} onClick={changeTheme}>
      <span className="position-absolute d-none d-sm-block themeSpan"></span>
      <div className="d-block d-sm-none position-absolute themDiv"></div>
      <i className="fa-solid fa-moon  px-2 night theme"></i>
      <i className="fa-regular fa-sun px-2 light theme"></i>
    </div>
  );
}
