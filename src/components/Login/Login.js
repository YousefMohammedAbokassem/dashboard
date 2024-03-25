import React, { useEffect, useState } from "react";
import Lable from "./Lable";
import axios from "axios";
import Design from "../../Design";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
export default function Login({ isLogged }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [t] = useTranslation();
  const [_, setCookies] = useCookies(["access_token"]);
  const submit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}admin/login`,
        {
          user_name: userName,
          password: password,
        }
      );
      setCookies("access_token", res.data.token);
      localStorage.setItem("access_token", res.data.token);
      console.log(res, "asd");
      // eve.holt@reqres.in
      // isLogged(true);
      // localStorage.setItem("isLogged", true);
      // console.log("تم تسجيل الدخول بنجاح");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = t("logIn");
  }, []);
  return (
    <div className="logImage d-flex justify-content-center align-items-center">
      <Design />
      <div className="logIn  gap-2 gap-md-3 gap-lg-5  d-flex align-items-center">
        {/* d-none d-md-block */}
        <div className="info px-1 px-md-4 d-none d-md-block ">
          <span className="topSpan">
            <FontAwesomeIcon icon={faRightToBracket} />
          </span>
          <h2>{t("Welcome")}</h2>
          <hr />
          <p>{t("welcomeToTheDashboard")}</p>
        </div>
        <div className="log">
          <h3 className="mx-auto">{t("signIn")}</h3>
          <form
            // action="/src/Components/Container/Container.js"
            method="post"
            onSubmit={submit}
          >
            <Lable
              HtmlFor="user"
              ClassName="d-flex"
              Name="userName"
              Id="user"
              Type="text"
              Info={t("userName")}
              setValue={setUserName}
            />
            <Lable
              HtmlFor="password"
              ClassName="d-flex"
              Name="password"
              Id="password"
              Type="password"
              Info={t("password")}
              setValue={setPassword}
            />
            <input
              className="mt-3 text-white"
              type="submit"
              value={t("submit")}
              name="submit"
            />
          </form>
          {/* <div className="icons mt-3 d-flex justify-content-center align-items-center gap-3">
            <i className="fas fa-facebook iconSocial"></i>
            <i class="fa fa-instagram iconSocial" aria-hidden="true"></i>
            <i class="fa fa-linkedin iconSocial" aria-hidden="true"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}
