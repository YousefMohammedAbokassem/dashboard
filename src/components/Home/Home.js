import React from "react";
import { useTranslation } from "react-i18next";
import Price from "./Price";
import "./Home.scss";
import Part from "./Part";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import ChartsContainer from "../Charts/ChartsContainer";
export default function Home() {
  const [t] = useTranslation();
  return (
    <div className="Home  p-1 p-md-3">
      <h6 className="">
        <span className="fontChangeSmall">
          <FontAwesomeIcon icon={faBuilding} />
        </span>
        <span className="mx-2 fontChangeSmall">{t("businessOverview")}</span>
      </h6>
      <div className="prices row my-4 justify-content-evenly ">
        <Price
          classes="red priceIcon p-sm-2 p-1 mx-sm-2 mx-2 "
          price="5000"
          detail={t("EarnedThisMonth")}
        />
        <Price
          classes="orange priceIcon p-sm-2 p-1 mx-sm-2 mx-2 "
          price="5000"
          detail={t("MonthlyVisitors")}
        />
        <Price
          classes="blue priceIcon p-sm-2 p-1 mx-sm-2 mx-2"
          price="5000"
          detail={t("VoucherIssued")}
        />
      </div>
      {/* end */}
      <div className="d-flex justify-content-evenly align-items-center flex-column flex-lg-row gap-2 gap-lg-5">
        <div className="customers box1 w-75 fontChangeSmall ">
          <div className="Neworder d-flex align-items-center justify-content-between">
            <h6 className="mb-0 fontChangeSmall">{t("NewOrder")}</h6>
            <a href="#" className="fontChangeSmall text-decoration-none">
              {t("ViewAll")}
            </a>
          </div>
          <div className="tableDiv table-responsive">
            <table className="table bg-boxes">
              <tr>
                <th>{t("Order Number")}</th>
                <th>{t("Customer")}</th>
                <th>{t("Total")}</th>
                <th>{t("Paid")}</th>
                <th>{t("Status")}</th>
                <th>{t("Action")}</th>
              </tr>
              <tr>
                <td>987654</td>
                <td>Yousef</td>
                <td className="tdColor">111</td>
                <td>x</td>
                <td>{t("close")}</td>
                <td>...</td>
              </tr>
              <tr>
                <td>987654</td>
                <td>Yousef</td>
                <td className="tdColor">111</td>
                <td>x</td>
                <td>{t("close")}</td>
                <td>...</td>
              </tr>
              <tr className="trPaid">
                <td>987654</td>
                <td>Yousef</td>
                <td className="tdColor">111</td>
                <td>x</td>
                <td>{t("open")}</td>
                <td>...</td>
              </tr>
              <tr className="status">
                <td>987654</td>
                <td>Yousef</td>
                <td className="tdColor">111</td>
                <td>x</td>
                <td>{t("close")}</td>
                <td>...</td>
              </tr>
              <tr className="action">
                <td>987654</td>
                <td>Yousef</td>
                <td className="tdColor">111</td>
                <td>x</td>
                <td>{t("open")}</td>
                <td>...</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="customers box2 flex-grow-1  fontChangeSmall">
          <div className=" d-flex align-items-center justify-content-between">
            <h6 className="mb-0 fontChangeSmall">{t("Top Customer")}</h6>
            <a href="#" className="text-decoration-none">
              {t("View all")}
            </a>
          </div>
          <div className="tableDiv table-responsive ">
            <table className="table bg-boxes">
              <tr>
                <th>{t("CustomerCom")}</th>
                <th>{t("Company")}</th>
              </tr>
              <tr>
                <td>Yousef</td>
                <td>{t("Company")}</td>
              </tr>
              <tr>
                <td>Yousef</td>
                <td>{t("Company")}</td>
              </tr>
              <tr>
                <td>Yousef</td>
                <td>{t("Company")}</td>
              </tr>
              <tr>
                <td>Yousef</td>
                <td>{t("Company")}</td>
              </tr>
              <tr>
                <td>Yousef</td>
                <td>{t("Company")}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="pb-5">
        <div className="Neworder fontChangeSmall d-flex align-items-center justify-content-between">
          <h6 className="mb-0 fontChangeSmall">{t("Store Overview")}</h6>
          <a href="#" className=" text-decoration-none">
            {t("View all")}
          </a>
        </div>
        <div className="my-4 row ">
          <Part />
          <Part />
        </div>
      </div>
      {/* charts */}
      <ChartsContainer />
    </div>
  );
}
