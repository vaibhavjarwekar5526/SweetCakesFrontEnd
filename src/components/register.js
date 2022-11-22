import React, { useState } from "react";
import user_service from "../services/user_service";
import Navbar from "./navbar";
import {useHistory} from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    let user = {
      name: name,
      email: email,
      password: password,
      address: address,
      mobile: mobile
    };
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address == "" ||
      mobile === ""
    ) {
      alert("please fill details");
    } else {
      user_service.createAccount(user).then(res => {
        console.log(res);
        alert("Account Created Successfully");
        history.push({
          pathname: "/Login"
        });
      });
      
    }

    
    
  };
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="main">
          <div className="container">
            <div className="register">
              <div className="register-but">
                <form>
                  <div className="register-top-grid">
                    <h3>PERSONAL INFORMATION</h3>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Name<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Address<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Mobile<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setMobile(e.target.value)}
                        required
                      />
                    </div>
                    <div className="clearfix"> </div>
                    <a className="news-letter" href="#">
                      <label className="checkbox">
                        <input type="checkbox" name="checkbox" checked="" />
                        <i> </i>Sign Up for Newsletter
                      </label>
                    </a>
                  </div>
                  <div className="register-bottom-grid">
                    <h3>LOGIN INFORMATION</h3>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Email<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Password<label>*</label>
                      </span>
                      <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                  <input
                    type="button"
                    onClick={handleSubmit}
                    className="w3-button w3-pink"
                    value="Submit"
                  />
                  <div className="clearfix"> </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
