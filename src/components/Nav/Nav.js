import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Language, goUp } from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoxesPacking,
  faBuilding,
  faChartBar,
  faCity,
  faFileLines,
  faHome,
  faPalette,
  faTruckFast,
  faUser,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [t] = useTranslation();
  const language = useContext(Language);
  const ChangeTitle = (vl, e) => {
    const scrollLine = document.querySelector(".scroll");
    scrollLine.style.cssText = "width:10px";
    goUp();
    document.title = t(vl);
    // moving span active into the target
    const span = document.querySelector("nav span.active");
    const fromTop = e.currentTarget.offsetTop;
    const widthSpan = e.currentTarget.offsetWidth;
    console.log(widthSpan);
    span.style.setProperty("--y", `${fromTop}px`);
    // span.style.setProperty("--widthSpan", `${widthSpan}px`);
    span.style.width = `${widthSpan}px`;
  };
  useEffect(() => {
    window.onresize = () => {
      // moving span active into the target
      const span = document.querySelector("nav span.active");
      const anchor = document.querySelector("nav a.active");
      // const fromTop = anchor.offsetTop;
      const widthSpan = anchor.offsetWidth;
      // span.style.setProperty("--y", `${fromTop}px`);
      // span.style.setProperty("--widthSpan", `${widthSpan}px`);
      span.style.width = `${widthSpan}px`;
    };
  }, []);
  return (
    <nav className="d-flex flex-column bg-boxes">
      <span
        className={`active ${
          localStorage.getItem("i18nextLng") === "ar" ? "ar" : ""
        }`}
      ></span>
      <NavLink
        to="/"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1  px-sm-2 d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Home", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Home")}</span>
      </NavLink>
      <NavLink
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2   d-flex align-items-center text-decoration-none `}
        to="/Category"
        onClick={(e) => ChangeTitle("Categories", e)}
      >
        <span className="px-2 px-sm-0 ">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Categories")}</span>{" "}
      </NavLink>
      <NavLink
        to="/SubCategories"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("SubCategories", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faChartBar} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">
          {t("SubCategories")}
        </span>
      </NavLink>
      <NavLink
        to="/Products"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Products", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faBoxesPacking} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Products")}</span>
      </NavLink>
      <NavLink
        to="/Invoices"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Invoices", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faFileLines} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Invoices")}</span>
      </NavLink>
      <NavLink
        to="/Order"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Order", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faTruckFast} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Order")}</span>
      </NavLink>
      <NavLink
        to="/Clients"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Clients", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Clients")}</span>
      </NavLink>
      <NavLink
        to="/Admins"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Admins", e)}
      >
        <span className="px-2 px-sm-0">
          <i className="fa-solid fa-user-secret"></i>
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Admins")}</span>
      </NavLink>
      <NavLink
        to="/Suppliers"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Suppliers", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faUsersLine} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("Suppliers")}</span>
      </NavLink>
      <NavLink
        to="/City"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("City", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faCity} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">{t("City")}</span>
      </NavLink>
      <NavLink
        to="/Colors"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("Colors", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faPalette} />
        </span>
        <span className="mx-2  d-none d-md-inline-block">{t("Colors")}</span>
      </NavLink>
      <NavLink
        to="/ShippingCompany"
        className={`${
          language == "ar" ? "ar" : ""
        } py-2 px-1 px-sm-2  d-flex align-items-center text-decoration-none `}
        onClick={(e) => ChangeTitle("ShippingCompany", e)}
      >
        <span className="px-2 px-sm-0">
          <FontAwesomeIcon icon={faBuilding} />
        </span>
        <span className="mx-2 d-none d-md-inline-block">
          {t("ShippingCompany")}
        </span>
      </NavLink>
    </nav>
  );
}
