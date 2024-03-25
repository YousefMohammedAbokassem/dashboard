// import React, { useState } from "react";
// import axios from "axios";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const credentials = {
//       username: username,
//       password: password,
//     };
//     const options = {
//       headers: {
//         lang: "ar",
//         "Content-Type": "application/json",
//       },
//     };
//     axios
//       .post(
//         "https://student.valuxapps.com/api/login",
//         {
//           method: "POST",
//           headers: {
//             lang: "ar",
//             "Content-Type": "application/json",
//           },
//         },
//         {
//           username: username,
//           password: password,
//         }
//       )
//       .then((response) => {
//         // يتم التعامل مع الاستجابة هنا
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // يتم التعامل مع الخطأ هنا
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">اسم المستخدم:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">كلمة المرور:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       <button type="submit">تسجيل الدخول</button>
//     </form>
//   );
// }

// export default LoginForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      // console.log(response);
      console.log("تم تسجيل الدخول بنجاح", response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء تسجيل الدخول", error);
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://reqres.in/api/login")
    //   .then((res) => console.log(res.data.data));
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="اسم المستخدم"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>تسجيل الدخول</button>
    </div>
  );
}

export default Login;
