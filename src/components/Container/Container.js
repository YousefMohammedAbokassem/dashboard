import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Container.css";
import "./css/all.min.css";
import Header from "../Header/Header";
import WOW from "wowjs";
import Dashboard from "../Dashbard/Dashboard";
import Go from "../GoUp/Go";
import Settings from "../Settings/Settings";
import Hello from "../Hello/Hello";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Coursera from "../Coursera/Coursera";
import Friends from "../Friends/Friends";
import Files from "../Files/Files";
import Plans from "../Plans/Plans";

export default function Container() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
      // mobile: false,
    }).init();
  }, []);
  return (
    <BrowserRouter>
      <div className="d-flex justify-content-center ">
        <Hello />
        <div className="nav Nav">
          <Nav />
        </div>
        <div className="cont">
          <Header />
          {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
          <Routes>
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/setting/" element={<Settings />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/projects/" element={<Projects />} />
            <Route path="/courses/" element={<Coursera />} />
            <Route path="/friends/" element={<Friends />} />
            <Route path="/files/" element={<Files />} />
            <Route path="/plans/" element={<Plans />} />
          </Routes>
        </div>
        <Go />
      </div>
    </BrowserRouter>
  );
}
