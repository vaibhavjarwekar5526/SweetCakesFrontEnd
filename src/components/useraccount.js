import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router";
import Usernavbar from "./usernavbar";
import { useHistory } from "react-router";

const Useraccount = () => {
  const location = useLocation();
  const history = useHistory();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const number = localStorage.getItem("mobile");
  const id = localStorage.getItem("id");
  useEffect(() => {
    if(!localStorage.getItem("email")){
		  history.push({
			pathname:"/"
		  })}
  }, []);

  return (
    <div>
      <Usernavbar />
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
                      <input type="text" value={name} required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Address<label>*</label>
                      </span>
                      <input type="text" value={address} required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Mobile<label>*</label>
                      </span>
                      <input type="text" value={number} required />
                    </div>
                    <div className="clearfix"> </div>
                    <a className="news-letter" href="#" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Useraccount;
