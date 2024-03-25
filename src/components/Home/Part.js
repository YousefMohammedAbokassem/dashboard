import React from "react";
import { useTranslation } from "react-i18next";

export default function Part() {
  const [t] = useTranslation();
  return (
    <div className="col-lg-6 mb-3 fontChangeSmall">
      <div className="boxCat bg-boxes d-flex align-items-md-stretch align-items-center justify-content-center flex-column flex-md-row py-3 px-1 p-xl-3 w-100">
        <div className="image my-4 d-flex align-items-center">
          <div className="imgCont p-1  mx-2 p-sm-2  mx-sm-3">
            <img src="/images/img.png" alt="" className="mx-md-2 mx-1" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span className="mb-2">{t("companyName1")}</span>
            <div className="gap-4 d-flex justify-content-center align-items-start flex-column">
              <div className="d-flex align-items-center justify-content-center">
                <span className="py-1 px-2   icon">ic</span>
                <div className="d-flex flex-column mx-2">
                  <span>{t("TotalSaled")}</span>
                  <b>2300</b>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <span className="py-1 px-2   icon">ic</span>
                <div className="d-flex flex-column mx-2">
                  <span>{t("TotalSaled")}</span>
                  <b>2300</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns flex-row flex-md-column mt-3 d-flex justify-content-evenly gap-2">
          <button className=" px-sm-3 px-2  px-lg-4 py-lg-2 py-1 ">
            {t("Manage Shop")}
          </button>
          <button className="px-sm-3 px-2  px-lg-4 py-lg-2 py-1">
            {t("Visit shop")}
          </button>
        </div>
      </div>
    </div>
  );
}
