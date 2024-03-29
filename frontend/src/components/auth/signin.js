import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "../authHelper.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserContext from "../../../store/user-context";
import { signin } from "../../datasource/api-user";
import { authenticate } from "./auth-helper.js";


//Defines a sign-in form with input fields for email and password.
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    password: "",
    countryCode: "",
  });

  
  
  const ctx = useContext(UserContext);
  
  //Handles form changes, submission, and displays error messages if sign-in fails.
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    userData.profilePicture = "";
    const data = { ...userData };
    data.phone = data.countryCode + data.phone;
    const res = await ctx.signUp(data);
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phone: "",
        address: "",
        password: "",
        countryCode: "",
      });
    }
  };

  return (
    <form className={classes.signUpForm} onSubmit={onSubmitHandler}>
      <div className={classes.nameBox}>
        <input name="firstName" type="text" placeholder="First Name" required onChange={changeHandler} value={userData.firstName} />
        <input name="lastName" type="text" placeholder="Last Name" required onChange={changeHandler} value={userData.lastName} />
      </div>

      <input name="email" type="email" required placeholder="Email" onChange={changeHandler} value={userData.email} />
      <input name="username" type="text" placeholder="Unique username" required onChange={changeHandler} value={userData.username} />

      <div className={classes.phone}>
        <div className={classes.selectPhoneBox}>
          <select name="countryCode" id="countryCode" className={classes.phoneCode} onChange={changeHandler} value={userData.countryCode}>
            <option value="+1">+1 (CA)</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
          </select>
        </div>

        <input name="phone" type="text" placeholder="123456789" required className={classes.phoneText} onChange={changeHandler} value={userData.phone} />
      </div>
      <input name="address" type="text" placeholder="Address" required onChange={changeHandler} value={userData.address} />
      <div className={classes.passwordContainer}>
        <input name="password" type={visible ? "text" : "password"} minLength={8} placeholder="********" required onChange={changeHandler} value={userData.password} />
        {visible && (
          <VisibilityIcon
            className={classes.passIcon}
            onClick={() => {
              setVisible(false);
            }}
          />
        )}
        {!visible && (
          <VisibilityOffIcon
            className={classes.passIcon}
            onClick={() => {
              setVisible(true);
            }}
          />
        )}
      </div>

      <button type="submit" className={classes.submitBtn}>
        Sign Up
      </button>
      <p className={classes.terms}>
        By tapping “Sign up” you agree to Hydra’s <span>Terms & Conditions </span> and <span>Privacy Policy</span>.
      </p>
    </form>
  );
};

export default Signin;
