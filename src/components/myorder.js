import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Usernavbar from "./usernavbar";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdb-react-ui-kit";
import user_service from "../services/user_service";
import { useHistory } from "react-router";

export const Myorder = () => {
  const location = useLocation();
  const name =localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const mobile = localStorage.getItem("mobile");
  const id = localStorage.getItem("id");
  const [order, setorder] = useState([]);
  const history = useHistory()
  useEffect(() => {
    if(!localStorage.getItem("email")){
		  history.push({
			pathname:"/"
		  })}
    user_service.myOrder(mobile).then(response => {
      setorder([response.data]);
      console.log(response);
    });
  }, []);
  return (
    <div>
      <Usernavbar/>
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
