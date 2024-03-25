import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Language } from "../../Components/Container/Container";
import { useTranslation } from "react-i18next";
// import "../SubCategories/SubCategories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Category() {
  // show image or span
  const [imgSpan, setImgSpan] = useState(false);
  // to show loading when fetch
  const [loading, setLoading] = useState(true);
  // to show Table or Form when click on add or edit button
  const [showTableForm, setShowTableForm] = useState(true);
  // show add button or cancel
  const [addCancel, setAddCancel] = useState(true);
  // to show add button on submit or edit button
  const [bool, setBool] = useState(true);

  // id when edit to send it to submit function
  const [idEdit, setIdEdit] = useState(0);
  // from container contains which language we use
  const language = useContext(Language);
  // to translate
  const [t] = useTranslation();
  // ***** to fetch *****//
  const [arabicName, setArabicName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [orderName, setOrderName] = useState("");
  // save api info in it
  const [todos, setTodos] = useState([]);
  // fetch data
  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}admin/socialMedia`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTodos(response.data.designs);
      // hide loading after fetch
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      // hide loading after fetch
      setLoading(false);
    }
  };
  console.log(todos);
  useEffect(() => {
    fetchTodos();
  }, []);

  const ShowAddForm = () => {
    // to show add button on submit
    setBool(true);
    // to show span image circle
    setImgSpan(false);
    // show Form hide table
    setShowTableForm(false);
    // show cancel button
    setAddCancel(false);
    // get inputs and make them empty
    // const orderNumber = document.querySelector(".orderNumber");
    // const arabic = document.querySelector(".arabic");
    // const english = document.querySelector(".english");
    // orderNumber.value = "";
    // arabic.value = "";
    // english.value = ""; // bool = !bool;
    // console.log(bool);
    // remove Text
    setTimeout(() => {
      const inputsUse = document.querySelectorAll(".inputUse");
      inputsUse.forEach((input) => {
        console.log("input");
        input.value = "";
      });
    }, 0);
  };
  // console.log(ShowFormEdit);
  const addEdit = async (e) => {
    try {
      // stop submit refresh
      e.preventDefault();
      // show add button
      setAddCancel(true);
      // show table hide form
      setShowTableForm(true);
      // remove the text from all inputs after added
      setTimeout(() => {
        const inputsUse = document.querySelectorAll(".inputUse");
        inputsUse.forEach((input) => {
          console.log("input");
          input.value = "";
        });
      }, 0);
      const rest = await axios.put(`http://localhost:5000/todo/${idEdit}`, {
        completed: false,
        // warning change this to the id that will come from api //////////////////////
        image: image,
        arabic: arabicName.trim(""),
        english: englishName.trim(""),
        order: orderName,
      });
      // refresh api to show the new
      fetchTodos();
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  // const blur = (e) => {
  //   // to return search input to the normal status
  //   const blur = document.querySelector(".blur");
  //   blur.classList.remove("focus", "focusLg");
  //   e.target.classList.remove("focus");
  // };
  // const focus = (e) => {
  //   // styling search input on focus
  //   const blur = document.querySelector(".blur");
  //   blur.classList.add("focus", "focusLg");
  //   e.target.classList.add("focus");
  // };

  const addTodo = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      setProgress(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}admin/socialMedia/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      // add a new info to api
      // refresh api in the page
      // show table hide form
      // show cancel button
      setAddCancel(true);
      //
      setShowTableForm(true);
      // remove the text from all inputs after added
      setTimeout(() => {
        const inputsUse = document.querySelectorAll(".inputUse");
        inputsUse.forEach((input) => {
          console.log("input");
          input.value = "";
        });
      }, 0);
      setProgress(false);

      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.get(
        `${process.env.REACT_APP_API_URL}admin/socialMedia/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      // refresh api in the page
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  const [image, setImage] = useState("");
  const handleImageChange = async (event, itemId) => {
    // the file in input that we uploaded it
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    const imgForm = document.querySelector(".imgForm");
    if (selectedImage) {
      console.log(selectedImage);
      console.log(reader);
      console.log(imgForm);
      reader.onload = function (e) {
        imgForm.src = reader.result; // تحديث src لـ imgForm بقيمة الصورة المحملة
      };
      reader.readAsDataURL(selectedImage);
    }
    // كائن لتخزين الصورة
    // const formData = new FormData();
    // formData.append("image", selectedImage);
    setImgSpan(true);
    // after api we need to edit
    // formData.append("image", selectedImage);
    setImage(selectedImage);
  };
  // add file to make another button that we can to style it
  const clickInputFile = () => {
    const inputFile = document.querySelector('input[type="file"]');
    inputFile.click();
  };
  //
  const Cancel = () => {
    // show table hide form
    setShowTableForm(true);
    // show add button
    setAddCancel(true);
    // remove Text
    setTimeout(() => {
      const inputsUse = document.querySelectorAll(".inputUse");
      inputsUse.forEach((input) => {
        console.log("input");
        input.value = "";
      });
    }, 0);
  };
  const handleArabic = (ele) => {
    setArabicName(ele.target.value);
    const arabicPattern = /^[\u0600-\u06FF\s]*$/; // نطاق الأحرف العربية
    if (arabicPattern.test(ele.target.value)) {
      // show paragraph
      setDisabledBool(false);
    } else {
      // hid paragraph
      setDisabledBool(true);
    }
  };
  const [disabledBool, setDisabledBool] = useState(false);
  // english

  // const validateEnglishInput = (inputValue) => {
  //   return englishPattern.test(inputValue);
  // };
  const handleEnglish = (ele) => {
    const englishPattern = /^[A-Za-z\s]*$/; // نطاق الأحرف الإنجليزية
    setEnglishName(ele.target.value);
    if (englishPattern.test(ele.target.value)) {
      setDisabledBoolEn(false);
    } else {
      setDisabledBoolEn(true);
    }
  };
  const [disabledBoolEn, setDisabledBoolEn] = useState(false);
  const [progress, setProgress] = useState(false);
  return (
    <>
      <div className="head radius-5 position-relative fontChangeSmall bg-boxes p-2 p-md-3 d-flex align-items-center justify-content-between">
        <h6 className="mb-0 fontChangeSmall">{t("Best selling")}</h6>
        <div className="info d-flex align-items-center justify-content-between gap-2">
          {/*  */}
          {addCancel ? (
            <button
              className="px-2 px-md-3 py-1 radius-8"
              onClick={ShowAddForm}
            >
              {t("add")}
            </button>
          ) : (
            <button
              className="px-2 px-md-3 py-1 radius-8 bg-danger text-white"
              onClick={Cancel}
            >
              {t("cancel")}
            </button>
          )}
        </div>
      </div>
      {/* if true show table false show form */}
      {showTableForm ? (
        <div className="table-responsive DivSubTable fontChangeSmall">
          <table className="table subTable table table-striped table-hover">
            {/* <caption>List of users</caption> */}
            <thead>
              <tr className="text-center">
                <th scope="col">{t("Image")}</th>
                {/* <th scope="col">{t("arabic")}</th>
                <th scope="col">{t("english")}</th>
                <th scope="col">{t("orderNumber")}</th> */}
                <th scope="col">{t("Delete")}</th>
              </tr>
            </thead>
            {loading ? (
              <div className="text-center noData">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : todos.length > 0 ? (
              <tbody className="tbody">
                {todos?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td scope="row">
                        {item.image_url && (
                          <img
                            className="tableImg"
                            src={`${process.env.REACT_APP_API_URL_IMAGE}${item.image_url}`}
                            alt="Item"
                          />
                        )}
                      </td>
                      {/* <td>{item.arabic}</td>
                      <td>{item.english}</td>
                      <td>{item.order}</td> */}
                      {/* <td></td>
                      <td></td>
                      <td></td> */}
                      <td>
                        <div
                          className="d-flex"
                          style={{ width: "fit-content", margin: "0 auto" }}
                        >
                          {/* <FontAwesomeIcon
                            className="mainColorText pointer mx-1"
                            icon={faPenToSquare}
                            onClick={() => ShowEditForm(item.id)}
                          /> */}
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => deleteTodo(item.id)}
                            className="mainColorText pointer"
                            size="lg"
                          />
                          {/* <button
                            className="bg-danger w-50 px-2 border-0 text-white btn-danger radius-5"
                            onClick={() => deleteTodo(item.id)}
                          >
                            {t("Delete")}
                          </button>
                          <button
                            className="bg-success w-50 mx-1 px-2 border-0 text-white btn-danger radius-5"
                            onClick={() => ShowEditForm(item.id)}
                          >
                            {t("Edit")}
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <div className="noData fw-bold text-capitalize text-center position-absolute">
                No data to show Please add Data
              </div>
            )}
          </table>
        </div>
      ) : (
        <>
          <form
            className=" pb-5 py-3 form fontChangeSmall d-flex flex-column justify-content-center align-items-center "
            onSubmit={bool ? addTodo : addEdit}
          >
            <img
              alt={"no Image"}
              src={``}
              className={`mb-2 imgForm ${imgSpan ? "d-block" : "d-none"}`}
              onClick={clickInputFile}
            />
            <span
              className={`spanForm ${imgSpan ? "d-none" : "d-grid"} `}
              onClick={clickInputFile}
            >
              {t("interfaceApp")}
            </span>

            <input
              className={`${language == "ar" ? "ar" : ""} inputUse`}
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event)}
              required
            />
            {bool ? (
              <>
                {progress ? (
                  <div className="text-center progress mt-2 h-auto w-auto bg-transparent">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <input
                    className="changeWidth btnForDelete w-50  text-white p-3"
                    type="submit"
                    value={t("add")}
                    disabled={
                      disabledBool === true || disabledBoolEn === true
                        ? true
                        : false
                    }
                  />
                )}
              </>
            ) : (
              <input
                className="changeWidth btnForEdit w-50 border-0 text-white py-2"
                type="submit"
                value={t("Edit")}
                style={{ background: "blue" }}
                disabled={
                  disabledBool === true || disabledBoolEn === true
                    ? true
                    : false
                }
              />
            )}
          </form>
        </>
      )}
    </>
  );
}
