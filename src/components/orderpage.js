import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router";
import user_service from "../services/user_service";
import Usernavbar from "./usernavbar";
import {useHistory} from "react-router";

const Orderform = () => {
  const location = useLocation();
  const username = localStorage.getItem("name");
  const useraddress = localStorage.getItem("address");
  const usermobile = localStorage.getItem("mobile");
  const cake = localStorage.getItem("cake");
  const quantity = localStorage.getItem("quantity");
  const price = localStorage.getItem("price");
  const [caketext, setCaketext] = useState("");
  const [deliverdate, setDeliverdate] = useState("");
  const status = "pending";
  const history = useHistory();
  var today = new Date(),
    currentdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  const id = localStorage.getItem("id")
  console.log(deliverdate);

  useEffect(() => {
    if(!localStorage.getItem("email")){
		  history.push({
			pathname:"/"
		  })}
  }, []);

  const handleSubmit = e => {
    let order = {
      name: username,
      address: useraddress,
      mobile: usermobile,
      cakeName: cake,
      cakeText: caketext,
      deliverDate: deliverdate,
      status: status,
      currentDate: currentdate,
      quantity: quantity,
      amount: price
    };
    if (caketext === "" || deliverdate === "") {
      alert("please enter caketext and deliverdate");
    } else {
      var options = {
        key: "rzp_test_bIZ9VWKdhVxeeo",
        key_secret: "J07Bxj9ZGBKs7DyTyhEjmgqp",
        amount: price * 100,
        currency: "INR",
        name: "PAYMENT FOR CAKE",
        description: "for testing purpose",
        handler: function(response) {
          alert(response.razorpay_payment_id);
          user_service.placeOrder(order).then(res => {
            console.log(res.data);
            alert("order placed successfully");
          });
        },
        prefill: {
          name: username,
          contact: usermobile
        },
        notes: { address: "Razorpay Corporate office" },
        theme: { color: "#3399cc" }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div>
      <Usernavbar
       
      />
      <div className="content">
        <div className="main">
          <div className="container">
            <div className="register">
              <div className="register-but">
                <form>
                  <div className="register-top-grid">
                    <h3>ORDERING INFORMATION</h3>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Name<label>*</label>
                      </span>
                      <input type="text" value={username} required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Address<label>*</label>
                      </span>
                      <input type="text" value={useraddress} required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Mobile<label>*</label>
                      </span>
                      <input type="text" value={usermobile} required />
                    </div>
                    <div className="clearfix"> </div>
                    <a className="news-letter" href="#">
                      <label className="checkbox" />
                    </a>
                  </div>
                  <div className="register-bottom-grid">
                    <h3>ITEM INFORMATION</h3>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Cakename<label>*</label>
                      </span>
                      <input type="text" value={cake} required />
                    </div>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Caketext<label>*</label>
                      </span>
                      <input
                        type="text"
                        value={caketext}
                        onChange={e => setCaketext(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Deliverdate<label>*</label>
                      </span>
                      <input
                        type="date"
                        value={deliverdate}
                        onChange={e => setDeliverdate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Quantity<label>*</label>
                      </span>
                      <input type="text" value={quantity} required />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Amount<label>*</label>
                      </span>
                      <input type="text" value={price} required />
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                  <input
                    type="button"
                    onClick={handleSubmit}
                    className="w3-button w3-pink"
                    value="Order Now"
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
export default Orderform;
