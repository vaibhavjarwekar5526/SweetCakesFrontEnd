import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Ownernavbar from "./ownernavbar";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdb-react-ui-kit";
import user_service from "../../services/user_service";
import { useHistory } from "react-router";

const Remainder = () => {
  const location = useLocation();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const number = localStorage.getItem("mobile");
  const history = useHistory();
  const [date, setDate] = useState("");
  const [cakename, setCakename] = useState("");
  const [quantity, setQuantity] = useState("");
  const [useraddress, setAddress] = useState("");
  const [order, setorder] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem("adminmail")){
      history.push({
        pathname:"/"
      })
    }
    user_service.getRemainder().then(response => {
      setorder(response.data);
      console.log(response);
    });
  }, []);
  const handleSubmit = e => {
    let remainder = {
      date: date,
      cakeName: cakename,
      quantity: quantity,
      address: useraddress
    };
    if (
      date === "" ||
      cakename === "" ||
      quantity === "" ||
      useraddress === ""
    ) {
      alert("please fill fields");
    } else {
      user_service.remainder(remainder).then(res => {
        console.log(res);
        alert("Remainder Added Successfully");
        window.location.reload(true);
      });
    }
  };
  const deleteRemainder = id => {
    user_service.deleteRemainder(id).then(() => {
      window.location.reload(true);
    });
  };

  const disableDates = () => {
    var today,dd,mm,yyyy;
    today=new Date();
    dd=today.getDate();
    mm=today.getMonth()+1;
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;
  };

  return (
    <div>
      <Ownernavbar name={name} address={address} mobile={number} />
      <div className="content">
        <div className="main">
          <div className="container">
            <div className="register">
              <div className="register-but">
                <form>
                  <div className="register-top-grid">
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Date<label>*</label>
                      </span>
                      <input
                        type="date"
                        min={disableDates()}
                        onChange={e => setDate(e.target.value)}
                        style={{ width: "94%" }}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Cakename<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setCakename(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Quantity<label>*</label>
                      </span>
                      <input
                        type="text"
                        onChange={e => setQuantity(e.target.value)}
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
                    <div className="clearfix"> </div>
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

      <br />
      <br />
      <div>
        {order.map((orders, index) => {
          return (
            <MDBCard
              style={{
                maxWidth: "22rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              key={index}
            >
              <MDBCardBody>
                <br />
                <br />
                <MDBCardText style={{ marginLeft: "22%" }}>
                  {"Date : " + orders.date}
                  <br />
                  <br />
                  {"Cakename : " + orders.cakeName}
                  <br />
                  <br />
                  {"Quantity : " + orders.quantity}
                  <br />
                  <br />
                  {"Address : " + orders.address}
                </MDBCardText>
                <br />
                <input
                  type="button"
                  style={{ marginLeft: "33%" }}
                  onClick={() => deleteRemainder(orders.id)}
                  className="w3-button w3-pink"
                  value="Delete"
                />
              </MDBCardBody>
              <br />
              <br />
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};
export default Remainder;
