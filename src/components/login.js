import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import user_service from "../services/user_service";
import Navbar from "./navbar";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [ownerdata, setOwnerdata] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    if (checkbox === false) {
      if (email === "" || password === "") {
        alert("please enter email and password");
      } else {
        user_service.checkUser(password).then(res => {
          setUserdata(res.data);
          if (res.data.email === email && res.data.password === password) {
            localStorage.setItem("email",res.data.email);
            localStorage.setItem("name",res.data.name);
            localStorage.setItem("address",res.data.address);
            localStorage.setItem("mobile",res.data.mobile);
            localStorage.setItem("id",res.data.id);
            history.push({
              pathname: "/Homeproduct",
            });
          }
        });
      }
    } else {
      if (email === "" || password === "") {
        alert("please enter email and password");
      } else if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("adminmail","admin@gmail.com");
        history.push({
          pathname: "/Ownerhomeproduct"
        });
      } else {
        alert("invalid email or password");
      }
    }
  };
  //console.log(userdata);

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="login-page">
            <div className="account_grid">
              <div
                className="col-md-6 login-left wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h3>NEW CUSTOMERS</h3>
                <p>
                  By creating an account with our store, you will be able to
                  move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders in your account
                  and more.
                </p>
                <Link className="acount-btn" to="/Register">
                  Create an Account
                </Link>
              </div>
              <div
                className="col-md-6 login-right wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <h3>REGISTERED CUSTOMERS</h3>
                <p>If you have an account with us, please log in.</p>
                <form>
                  <div>
                    <span>
                      Email Address<label>*</label>
                    </span>
                    <input
                      type="text"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <span>
                      Password<label>*</label>
                    </span>
                    <input
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="option">
                    <a className="news-letter" href="#">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          onChange={e => setCheckbox(true)}
                        />
                        <i> </i>check if you are a owner
                      </label>
                    </a>
                  </div>
                  <div className="loginbutton">
                    <Link className="forgot" to="/Forgetpassword">
                      Forgot Your Password?
                    </Link>
                    <input
                      type="button"
                      className="w3-button w3-pink"
                      onClick={handleSubmit}
                      value="Login"
                    />
                  </div>
                </form>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
