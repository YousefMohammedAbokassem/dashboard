import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubCategories from "../../pages/SubCategories/SubCategories";
// import Invoices from "../Invoices/Invoices";
// import Order from "../Order/Order";
// import Clients from "../Clients/Clients";
// import Admins from "../Admins/Admins";
// import City from "../City/City";
import WOW from "wowjs";
import { useCookies } from "react-cookie";

// import ShippingCompany from "../ShippingCompany/ShippingCompany";
// import Suppliers from "../Suppliers/Suppliers";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
// import "./Container.scss";
import { useEffect } from "react";
import Home from "../Home/Home";
import Category from "../../pages/Category/Category";
import Login from "../Login/Login";
import LoginForm from "../Log/Log";
// import Colors from "../Colors/Colors";
// import { useApi } from "../Fetch/useAxios";
import Option from "../Option/Option";
// import { Detector } from "react-detect-offline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Scroll from "../../Scroll";
import Products from "../../pages/Products/Products";
export const Language = createContext();
export const changeLanguage = createContext();
export const goUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default function Container() {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const [lanList, setLanList] = useState(false);
  const showList = () => {
    if (!lanList) {
      setLanList(!lanList);
      setTimeout(() => {
        const ulLan = document.querySelector(".ulLan");
        ulLan.classList.toggle("showListItem");
      });
    } else {
      const ulLan = document.querySelector(".ulLan");
      ulLan.classList.toggle("showListItem");
      setTimeout(() => {
        setLanList(!lanList);
      }, 500);
    }
    // else {
    //   setLanList(!lanList);
    //   setTimeout(() => {
    //     const ulLan = document.querySelector(".ulLan");
    //     ulLan.classList.toggle("showListItem");
    //   }, 500);
    // }
  };
  const changeLanguageFun = (lan) => {
    setLanguage(lan);
    // document.title = t(document.title);
    if (lan === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltl";
    }
    // localStorage.setItem("language", bool);
    // bool = !bool;
    i18n.changeLanguage(lan);
    showList();
    // const link = document.querySelector("nav .active");
    // link.click();
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
      // mobile: false,
    }).init();
    if (localStorage.getItem("i18nextLng") == "ar") {
      document.documentElement.dir = "rtl";
    }
    const myButton = document.querySelector(".myButton");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        myButton.style.cssText =
          "pointer-events: auto; bottom: 50px; opacity: 1;";
      } else {
        myButton.style.cssText =
          "pointer-events: none; bottom: 20px; opacity: 0;";
      }
    });
  }, []);
  const [isLoggedIn, setIsloggedIn] = useState(
    localStorage.getItem("isLogged") || false
  );
  const show = (on) => {
    const div = document.querySelector(".offline");
    div.innerHTML = `yyyy`;
  };
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <BrowserRouter>
      <Language.Provider value={language}>
        <changeLanguage.Provider value={changeLanguageFun}>
          <Scroll />
          <Option />
          {/* <button onClick={change}>{t("dash")}</button> */}
          {!cookies.access_token ? (
            <Routes>
              <Route path="/" element={<Login isLogged={setIsloggedIn} />} />
            </Routes>
          ) : (
            <div>
              {/*  */}

              {/* <Login /> */}
              <i
                className={`${
                  language == "ar" ? "ar" : ""
                } fas fa-caret-square-up myButton`}
                onClick={goUp}
              ></i>
              <Header
                lanList={lanList}
                showList={showList}
                setIsloggedIn={setIsloggedIn}
              />
              <div className="d-flex NavAndSec">
                <Nav />
                <div
                  className={`flex-grow-1 p-2 routes ${
                    language == "ar" ? "ar" : ""
                  }`}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Category" element={<Category />} />
                    <Route path="/SubCategories" element={<SubCategories />} />
                    <Route path="/Products" element={<Products />} />
                    {/* <Route path="/Invoices" element={<Invoices />} /> */}
                    {/* <Route path="/Order" element={<Order />} /> */}
                    {/* <Route path="/Clients" element={<Clients />} /> */}
                    {/* <Route path="/Admins" element={<Admins />} /> */}
                    {/* <Route path="/Suppliers" element={<Suppliers />} />
                    <Route path="/City" element={<City />} /> */}
                    {/* <Route path="/Colors" element={<Colors />} /> */}
                    {/* <Route
                      path="/ShippingCompany"
                      element={<ShippingCompany />}
                    /> */}
                  </Routes>
                </div>
              </div>
            </div>
          )}
        </changeLanguage.Provider>
      </Language.Provider>
    </BrowserRouter>
  );
}
