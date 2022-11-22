import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router";
import Ownernavbar from "./ownernavbar";
import { useHistory } from "react-router";

const Owneraccount = () => {
  const history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem("adminmail")){
      history.push({
        pathname:"/"
      })
    }
  });
  return (
    <div>
      <Ownernavbar />
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
                      <input type="text" value="john" required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Address<label>*</label>
                      </span>
                      <input type="text" value="Chennai" required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Mobile<label>*</label>
                      </span>
                      <input type="text" value="8769045620" required />
                    </div>
                    <div className="clearfix"> </div>
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
export default Owneraccount;
