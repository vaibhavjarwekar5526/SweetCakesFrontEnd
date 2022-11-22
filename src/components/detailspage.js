import React, { useState,useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import Usernavbar from "./usernavbar";

export const Detailspage = props => {
  const [check, setCheck] = useState("");
  const history = useHistory();
  const location = useLocation();
  const amount = check * localStorage.getItem("price");
  const id = localStorage.getItem("id");
  useEffect(() => {
    if(!localStorage.getItem("email")){
      history.push({
        pathname:"/"
      })
    }})
  return (
    <div>
      <Usernavbar
      />
      <div class="details">
        <div class="container">
          <div class="row single">
            <div class="col-md-9">
              <div class="single_left">
                <div class="grid images_3_of_2">
                  <ul id="etalage">
                    <li>
                      <a href="optionallink.html">
                        <img
                          class="etalage_thumb_image"
                          src={localStorage.getItem("image")}
                          className="img-responsive"
                        />
                      </a>
                    </li>
                  </ul>
                  <div class="clearfix" />
                </div>
                <div class="desc1 span_3_of_2">
                  <h3>
                    {localStorage.getItem("cakename")}
                  </h3>
                  <p>
                    {"Rs: " + localStorage.getItem("price")}
                    <a href="#">click for offer</a>
                  </p>
                  <div class="det_nav">
                    <h4>related cakes :</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            src="images/11.jpg"
                            class="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/12.jpg"
                            class="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/13.jpg"
                            class="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/14.jpg"
                            class="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="det_nav1">
                    <h4>Select a cake :</h4>
                    <div class=" sky-form col col-4">
                      <ul
                        onChange={e => setCheck(e.target.value)}
                        value={check}
                      >
                        <li>
                          <label class="checkbox">
                            <input type="checkbox" name="checkbox" value="1" />
                            <i />1kg
                          </label>
                        </li>
                        <li>
                          <label class="checkbox">
                            <input type="checkbox" name="checkbox" value="2" />
                            <i />2kg
                          </label>
                        </li>
                        <li>
                          <label class="checkbox">
                            <input type="checkbox" name="checkbox" value="3" />
                            <i />3kg
                          </label>
                        </li>
                        <li>
                          <label class="checkbox">
                            <input type="checkbox" name="checkbox" value="4" />
                            <i />4kg
                          </label>
                        </li>
                        <div class="clearfix" />
                      </ul>
                    </div>
                    <div class="clearfix" />
                  </div>
                  <div>
                    <button
                      className="w3-button w3-pink"
                      onClick={() => {
                        if (check === "") {
                          alert("Select quantity");
                        } else {
                          history.push({
                            pathname: "/order",
                            state: {
                              name:localStorage.getItem("name"),
                              address: localStorage.getItem("address"),
                              mobile: localStorage.getItem("mobile"),
                              cakename: localStorage.getItem("cakename"),
                              quantity: check,
                              price: amount,
                              id: id
                            }
                          });
                        }
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
                <div class="clearfix" />
              </div>
              <div class="single-bottom1">
                <h6>Details</h6>
                <p class="prod-desc">
                  {localStorage.getItem("description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
