import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";
import "./header.scss";
import { Language, changeLanguage } from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faLanguage,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Header({ showList, lanList, setIsloggedIn }) {
  const [t] = useTranslation();
  const change = useContext(changeLanguage);
  const language = useContext(Language);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}admin/logout`,
        {
          headers: {
            Authorization: `Bearer ${cookies.access_token}`,
          },
        }
      );
      // setIsloggedIn(false);
      setCookies("access_token", "");
      localStorage.removeItem("access_token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="bg-boxes position-fixed top-0 d-flex align-items-center justify-content-between container-fluid px-2 px-md-4 py-3">
      <div className="logoAndSec d-flex justify-content-between align-items-center ">
        <div className="logo">logo</div>

        <Section value={t("dashboard")} />
        <div className="div logOut mx-2" onClick={logOut}>
          {t("logOut")}
          <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {/* <button className=" mx-1 mx-sm-3 btn py-1  px-2 px-md-1 fontChangeSmall">
          {t("NewIsseue")}
        </button> */}
        <button className="btn py-1 px-2 px-md-1 fontChangeSmall">
          {t("Redeem")}
        </button>
        <div className="mx-3">
          <ul className="list-unstyled mb-0 p-0">
            <li className="position-relative">
              <button
                className="btn border-0 px-2 py-1 btn fontChangeSmall "
                onClick={showList}
              >
                <FontAwesomeIcon icon={faLanguage} />
                {/* <i className="fa fa-language"></i> */}
              </button>
              {lanList ? (
                <ul className="list-unstyled mb-0 position-absolute ulLan p-0">
                  <li
                    className={`${
                      language == "ar" ? "ar" : ""
                    } py-2 listItemLan`}
                    onClick={() => change("en")}
                  >
                    {t("English")}
                  </li>
                  <li
                    className={`${
                      language == "ar" ? "ar" : ""
                    } py-2 listItemLan`}
                    onClick={() => change("ar")}
                  >
                    {t("Arabic")}
                  </li>
                  <li
                    className={`${
                      language == "ar" ? "ar" : ""
                    } py-2 listItemLan`}
                    onClick={() => change("fr")}
                  >
                    {t("French")}
                  </li>
                  <li
                    className={`${
                      language == "ar" ? "ar" : ""
                    } py-2 listItemLan`}
                    onClick={() => change("sp")}
                  >
                    {t("Spanish")}
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
          </ul>
          {/* <button className="border-0 px-2 py-1 mx-2 " onClick={change}>
            en
          </button> */}
        </div>
        {/* <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="imageUpload">اختر صورة للرفع:</label>
        <input type="file" name="imageUpload" id="imageUpload">
        <input type="submit" value="رفع الصورة">
    </form> */}
        <img src={"/dashboard/imgs/vis.jpeg"} alt="" />
      </div>
    </header>
  );
}
