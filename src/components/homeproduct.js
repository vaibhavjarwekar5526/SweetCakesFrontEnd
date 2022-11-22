import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import Usernavbar from "./usernavbar";
import user_service from "../services/user_service";
import { useCart } from "react-use-cart";
import { Cart } from "./cart";
const Homeproduct = () => {
  const history = useHistory();

  const [newvariety, setNewvariety] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem("email")){
		  history.push({
			pathname:"/"
		  })}
    user_service.getProduct().then(response => {
      setNewvariety(response.data);
      console.log(response);
    });
    
  }, []);
  const location = useLocation();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const mobile = localStorage.getItem("mobile");
  const id = localStorage.getItem("id");
  const { addItem } = useCart();
  return (
    <div>
      <Usernavbar />
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 />
            <p />
          </div>

          <div className="row">
            {newvariety.map((prod, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  key={index}
                >
                  <div
                    className="member"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="member-img">
                      <img src={prod.imageUrl} className="img-fluid" alt="" />
                      <div className="social">
                        <a>
                          <i
                            className="fa fa-shopping-cart"
                            onClick={() => addItem(prod)}
                          />
                        </a>
                        <a>
                          <i
                            className="fa fa-credit-card"
                            onClick={() =>{
                              localStorage.setItem("image",prod.imageUrl);
                              localStorage.setItem("cakename",prod.name);
                              localStorage.setItem("price",prod.price);
                              localStorage.setItem("description",prod.description);
                              history.push({
                                pathname: "/detailspage",
                              })}}
                          />
                        </a>
                      </div>
                    </div>

                    <div className="member-info">
                      <h4>
                        {prod.name}
                      </h4>
                      <span>
                        {"$" + prod.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeproduct;
