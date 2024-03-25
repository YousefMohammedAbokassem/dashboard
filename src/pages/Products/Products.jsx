import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Language } from "../../Components/Container/Container";
import { useTranslation } from "react-i18next";
// import "../SubCategories/SubCategories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
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
  //   description app
  const [descriptionApp, setDescriptionApp] = useState("");
  //    app name
  const [nameApp, setNameApp] = useState("");
  // skeleton
  const [skeleton, setSkeleton] = useState(true);

  // id when edit to send it to submit function
  // from container contains which language we use
  const language = useContext(Language);
  // to translate
  const [t] = useTranslation();
  // ***** to fetch *****//
  // save api info in it
  const [todos, setTodos] = useState([]);
  // fetch data
  const fetchTodos = async () => {
    setSkeleton(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}admin/apps`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTodos(response.data.apps);
      // hide loading after fetch
      setLoading(false);
      setSkeleton(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      // hide loading after fetch
      setSkeleton(false);
      setLoading(false);
    }
  };
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
    // remove Text
    setTimeout(() => {
      const inputsUse = document.querySelectorAll(".inputUse");
      inputsUse.forEach((input) => {
        console.log("input");
        input.value = "";
      });
    }, 0);
  };
  const addTodo = async (e) => {
    try {
      e.preventDefault();
      // show table hide form
      // show cancel button
      setAddCancel(true);
      //
      setShowTableForm(true);
      // remove the images on form
      setImagesCards([]);

      // remove the text from all inputs after added
      setTimeout(() => {
        const inputsUse = document.querySelectorAll(".inputUse");
        inputsUse.forEach((input) => {
          console.log("input");
          input.value = "";
        });
      }, 0);
      const formData = new FormData();
      formData.append("name", nameApp);
      formData.append("description", descriptionApp);
      formData.append("main_image", image);
      images.map((imageApp, i) => {
        console.log(`images[${i}]`, imageApp);
        formData.append(`images[${i}]`, imageApp);
      });
      // add a new info to api
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}admin/apps/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      // refresh api in the page
      setShowTableForm(true);
      // remove the images on form
      setImagesCards([]);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.get(
        `${process.env.REACT_APP_API_URL}admin/apps/delete/${id}`,
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
  //   image
  const [image, setImage] = useState("");
  const handleImageChange = async (event, itemId) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    const imgForm = document.querySelector(".imgForm");
 
    if (selectedImage) {
      reader.onload = function (e) {
        imgForm.src = reader.result; // تحديث src لـ imgForm بقيمة الصورة المحملة
      };
      reader.readAsDataURL(selectedImage);
    }
    setImgSpan(true);
    setImage(selectedImage);
  };
  //   multiple images
  const [images, setImages] = useState([]);
  const [imagesCards, setImagesCards] = useState([]);
  const handleImagesChange = async (event, itemId) => {
    // the file in input that we uploaded it
    const selectedImages = Array.from(event.target.files);
    selectedImages.forEach((image) => {
      const reader = new FileReader();
      if (image) {
        reader.onload = function (e) {
          // console.log(reader.result);
          setImagesCards((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(image);
      }
    });
    // كائن لتخزين الصورة
    // const formData = new FormData();
    // formData.append("image", selectedImage);
    // setImgSpan(true);
    // after api we need to edit
    // formData.append("image", selectedImage);
    setImages(selectedImages);
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
  const [disabledBool, setDisabledBool] = useState(false);
  // english

  // const validateEnglishInput = (inputValue) => {
  //   return englishPattern.test(inputValue);
  // };
  const [disabledBoolEn, setDisabledBoolEn] = useState(false);
  // console.log(imagesCards);
  return (
    <>
      <div className="container mx-auto head radius-5 position-relative fontChangeSmall bg-boxes p-2 p-md-3 d-flex align-items-center justify-content-between">
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
        <div className="row container mx-auto">
          {skeleton ? (
            <>
              {[...Array(10).keys()].map((item, i) => {
                return (
                  <div className="col col-md-6 col-lg-4 mt-3" key={i}>
                    <div
                      className="card cardApps cardSkeleton"
                      aria-hidden="true"
                    >
                      <p className="card-text placeholder-glow w-100 h-50">
                        <span
                          className="placeholder col-7 d-block w-100 h-100"
                          cardSpan
                        ></span>
                      </p>

                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7" cardSpan></span>
                          <span className="placeholder col-4" cardSpan></span>
                          <span className="placeholder col-4" cardSpan></span>
                          <span className="placeholder col-6" cardSpan></span>
                          <span className="placeholder col-8" cardSpan></span>
                        </p>
                        <a
                          href="#"
                          tabindex="-1"
                          className="btn btn-danger disabled placeholder col-6"
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              })}
              }
            </>
          ) : (
            todos?.map((app) => {
              return (
                <>
                  <div className="col col-md-6 col-lg-4 mt-3">
                    <div className="card cardApps w-100 h-100">
                      <img
                        className="card-img-top"
                        style={{ objectFit: "contain", height: "300px" }}
                        src={`${process.env.REACT_APP_API_URL_IMAGE}${app.main_image}`}
                        alt="Card image cap"
                      />
                      <div className="card-body text-center ">
                        <h5 className="card-title">{app.name}</h5>
                        <p className="card-text">{app.description}</p>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteTodo(app.id)}
                        >
                          {t("Delete")}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      ) : (
        <form
          className=" pb-5 py-3 form fontChangeSmall d-flex flex-column justify-content-center align-items-center "
          onSubmit={addTodo}
        >
          {/* {imgSpan ? ( */}
          <div className="d-flex justify-content-center align-items-center gap-4">
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
            <div>
              <input
                className={`${language == "ar" ? "ar" : ""} inputUse`}
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event)}
                required
              />
              <label htmlFor="images" className="spanFormImages ">
                {t("images")}
                <input
                  id="images"
                  className={`${language == "ar" ? "ar" : ""} `}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => handleImagesChange(event)}
                  required
                />
              </label>
            </div>
          </div>

          <input
            onChange={(e) => setNameApp(e.target.value)}
            className="changeWidth arabic w-50 border-1 mb-2 p-4 inputUse"
            type="text"
            value={nameApp}
            placeholder={t("appName")}
            required
          />
          {disabledBool && (
            <p className="mainColorText fw-bold fs-6">{t("justArabic")}</p>
          )}
          <input
            onChange={(e) => setDescriptionApp(e.target.value)}
            className="changeWidth english w-50 border-1 mb-2 p-4 inputUse"
            type="text"
            value={descriptionApp}
            placeholder={t("appDescription")}
            required
          />
          {bool ? (
            <input
              className="changeWidth btnForDelete w-50  border-0 text-white p-4 mainColorBg"
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

      {imagesCards.length ? (
        <div className="imagesProducts container mx-auto">
          {imagesCards.map((image) => {
            return (
              <div className="image">
                <img src={`${image}`} alt="no image" className="w-100 h-100" />;
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
