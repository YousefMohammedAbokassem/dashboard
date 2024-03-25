import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Language } from "../../Components/Container/Container";
import { useTranslation } from "react-i18next";
// import "../SubCategories/SubCategories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SubCategories() {
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
        `${process.env.REACT_APP_API_URL}admin/videos`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTodos(response.data.videos);
      // hide loading after fetch
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      // hide loading after fetch
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const ShowEditForm = async (id) => {
    try {
      // to show edit button on submit
      setBool(false);
      // to show img circle that we selected it
      setImgSpan(true);
      // send id to edit button on submit to know which field we selected
      setIdEdit(id);
      // show Form hide table
      setShowTableForm(false);
      // show cancel button
      setAddCancel(false);
      // get info from api
      const response = await axios.get(`http://localhost:5000/todo/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      // get inputs and put them values in them fields
      setOrderName(response.data.order);
      //
      setArabicName(response.data.arabic);
      //
      setEnglishName(response.data.english);
      // setImage(response.data.image);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
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
      const formData = new FormData();
      formData.append("video_image", image);
      formData.append("video", video);
      console.log(image);
      // add a new info to api
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}admin/videos/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      // refresh api in the page
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.get(
        `${process.env.REACT_APP_API_URL}admin/videos/delete/${id}`,
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
    // كائن لتخزين الصورة
    // const formData = new FormData();
    // formData.append("image", selectedImage);
    setImgSpan(true);
    // after api we need to edit
    // formData.append("image", selectedImage);
    setImage(selectedImage);
  };
  const [video, setVideo] = useState("");
  const handleVideoChange = async (event, itemId) => {
    // the file in input that we uploaded it
    const selectedVideo = event.target.files[0];
    // كائن لتخزين الصورة
    // const formData = new FormData();
    // formData.append("image", selectedImage);
    // setImgSpan(true);
    // after api we need to edit
    // formData.append("image", selectedImage);
    setVideo(selectedVideo);
  };
  // add file to make another button that we can to style it
  const clickInputFile = () => {
    const inputFile = document.querySelector('input[type="file"]');
    inputFile.click();
  };

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
                <th scope="col" className="text-capitalize">
                  {t("video")}
                </th>
                {/* <th scope="col">{t("arabic")}</th>
                <th scope="col">{t("english")}</th>
                <th scope="col">{t("orderNumber")}</th> */}
                <th scope="col">{t("edit")}</th>
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
                        {item.video_image && (
                          <img
                            className="tableImg"
                            src={`${process.env.REACT_APP_API_URL_IMAGE}${item.video_image}`}
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
                          <FontAwesomeIcon
                            className="mainColorText pointer mx-1"
                            icon={faPenToSquare}
                            onClick={() => ShowEditForm(item.id)}
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => deleteTodo(item.id)}
                            className="mainColorText pointer"
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
        <form
          className=" pb-5 py-3 form fontChangeSmall d-flex flex-column justify-content-center align-items-center "
          onSubmit={bool ? addTodo : addEdit}
        >
          {imgSpan ? (
            <img
              alt={"no Image"}
              src={`dashboard/imgs/${image}`}
              className={`mb-2 imgForm`}
              onClick={clickInputFile}
            />
          ) : (
            <span className={`spanForm`} onClick={clickInputFile}>
              {t("image")}
            </span>
          )}

          <input
            className={`${language == "ar" ? "ar" : ""} inputUse`}
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event)}
            required
          />
          <input
            className={`${language == "ar" ? "ar" : ""} `}
            type="file"
            // accept="image/*"
            onChange={(event) => handleVideoChange(event)}
            required
          />
          {/* <input
            onChange={handleArabic}
            className="changeWidth arabic w-50 border-1 mb-2 p-2 inputUse"
            type="text"
            value={arabicName}
            placeholder={t("arabic")}
            required
          />
          {disabledBool && (
            <p className="mainColorText fw-bold fs-6">{t("justArabic")}</p>
          )}
          <input
            onChange={handleEnglish}
            className="changeWidth english w-50 border-1 mb-2 p-2 inputUse"
            type="text"
            value={englishName}
            placeholder={t("english")}
            required
          /> */}
          {/* condition */}
          {/* {disabledBoolEn && (
            <p className="mainColorText fw-bold fs-6">{t("justEnglish")}</p>
          )} */}
          {/* <input
            onChange={(ele) => setOrderName(ele.target.value)}
            className="changeWidth orderNumber w-50 border-1 mb-2 p-2 inputUse "
            type="number"
            value={orderName}
            placeholder={t("orderNumber")}
            required
          /> */}
          {bool ? (
            <input
              className="changeWidth btnForDelete w-50 bg-success border-0 text-white py-2"
              type="submit"
              value={t("add")}
              disabled={
                disabledBool === true || disabledBoolEn === true ? true : false
              }
            />
          ) : (
            <input
              className="changeWidth btnForEdit w-50 border-0 text-white py-2"
              type="submit"
              value={t("Edit")}
              style={{ background: "blue" }}
              disabled={
                disabledBool === true || disabledBoolEn === true ? true : false
              }
            />
          )}
        </form>
      )}
    </>
  );
}
