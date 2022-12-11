import React, { useEffect } from "react";
import Change from "../Change/Change";
import "./Header.css";
export default function Header() {

 
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
        <Change classAll="LightNight position-relative d-sm-flex d-none" />

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
