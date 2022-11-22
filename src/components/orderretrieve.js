import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText
} from "mdb-react-ui-kit";
import Ownernavbar from "./owner/ownernavbar";
import axios from "axios";
import { useLocation } from "react-router";
import user_service from "../services/user_service";
import { useHistory } from "react-router";

export default function Orderretrieve() {
  const [order, setorder] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const number = localStorage.getItem("mobile");

  useEffect(() => {
    if(!localStorage.getItem("adminmail")){
		  history.push({
			pathname:"/"
		  })}
    user_service.getOrder().then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].status == "pending") {
          setorder([response.data[i]]);
        }
      }

      console.log(response);
    });
  }, []);

  return (
    <div>
      <Ownernavbar />
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
                  {"Username : " + orders.name}
                  <br />
                  <br />
                  {"Address : " + orders.address}
                  <br />
                  <br />
                  {"Mobile : " + orders.mobile}
                  <br />
                  <br />
                  {"Cakename : " + orders.cakeName}
                  <br />
                  <br />
                  {"Caketext : " + orders.cakeText}
                  <br />
                  <br />
                  {"Deliverdate : " + orders.deliverDate}
                  <br />
                  <br />
                  {"Quantity : " + orders.quantity}
                  <br />
                  <br />
                  {"Amount : " + orders.amount}
                </MDBCardText>
                <br />
                <button
                  className="w3-button w3-pink"
                  style={{ marginLeft: "33.5%" }}
                  onClick={() => {
                    let id = orders.id;
                    let order = {
                      name: orders.name,
                      address: orders.address,
                      mobile: orders.mobile,
                      cakeName: orders.cakeName,
                      cakeText: orders.cakeText,
                      deliverDate: orders.deliverDate,
                      status: "delivered",
                      currentDate: orders.currentDate,
                      quantity: orders.quantity,
                      amount: orders.amount
                    };
                    user_service.updateOrderStatus(id, order).then(res => {
                      console.log(res);
                      window.location.reload(true);
                    });
                  }}
                >
                  Delivered
                </button>
              </MDBCardBody>
              <br />
              <br />
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
}
