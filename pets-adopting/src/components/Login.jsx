import { useContext, useState, useEffect } from "react";
import petsAdoptingContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Login({ handleClose,setWelcomeShow }) {
  const {
    setCurrentUser,
    togglePassword,
    passwordShown,
    setAdmin,
  } = useContext(petsAdoptingContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    admin: "",
  });
  const [logAsAdmin, setLogAsAdmin] = useState(false);
  // const[adminKey, setAdminKey]=useState("")
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      console.log(userInfo)
      const res = await axios.post("http://localhost:8080/LogIn",{ ...userInfo },{ withCredentials: true });
      console.log(res.data)
      if (res.data.role.admin) {
        console.log("thinks its true")
        setAdmin(true);
      }
      setCurrentUser(res.data);
      if (handleClose) {
        console.log("this is itttt" ,handleClose)
        setWelcomeShow(false);
        console.log("????????///")
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <form className="login-form" onSubmit={handleLogIn}>
      <input
        className="rounded-pill border border-grey border border-2"
        onChange={handleChange}
        placeholder="Email"
        value={userInfo.email}
        id="email"
      />
      <input
        className="rounded-pill border border-grey border border-2"
        onChange={handleChange}
        placeholder="Password"
        value={userInfo.password}
        id="password"
        type={passwordShown ? "text" : "password"}
      />
      <div className="show-password d-inline-flex align-self-center mt-2">
        {" "}
        <input className=" me-1" type="checkbox" onClick={togglePassword} />
        <span>Show Password</span>{" "}
      </div>
      <div className="d-flex flex-column">
        <span
          onClick={() => {
            setLogAsAdmin((curr) => !curr);
          }}
          className=" admin-btn align-self-center fw-bolder  my-2 px-3 rounded-pill"
        >
          I am Admin
        </span>
        {logAsAdmin && (
          <input
            value={userInfo.admin}
            onChange={handleChange}
            id="admin"
            className="rounded-pill border border-grey border border-2"
            type={passwordShown ? "text" : "password"}
            placeholder="enter admin key"
          />
        )}
        <span className="notSigned-txt align-self-center my-1">
          Not Admin?{" "}
          <span className="admin-leran-more-btn mx-2 rounded-pill text-warning">
            <ins>Learn More</ins>
          </span>
        </span>
      </div>
      <button className="login-btn rounded-pill my-2"><FontAwesomeIcon icon={faPaw} /></button>
    </form>
  );
}
export default Login;
