import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Container.css";
import "./css/all.min.css";
import Header from "../Header/Header";
import WOW from "wowjs";

export default function Container() {
  useEffect(()=>{
       new WOW.WOW({
         live: false,
       }).init();
  },[])
  return (
    <BrowserRouter>
      <div className="d-flex justify-content-center ">
        <div className="nav w-25">
          <Nav />
        </div>
        <div className=" flex-grow-1">
          <Header />
          {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
          <Routes>
            <Route path="/files/" element={<Nav />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
