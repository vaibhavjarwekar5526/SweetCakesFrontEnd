import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import user_service from "../services/user_service";

export const Cart = () => {
  const history = useHistory();
  const location = useLocation();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const mobile = localStorage.getItem("mobile");
  const [caketext, setcaketext] = useState("");
  const [deliverdate, setdeliverdate] = useState("");
  const [cakename, setcakename] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem("email")){
      history.push({
        pathname:"/"
      })
    }
    var str = "";
    for (var i = 0; i < items.length; i++) {
      str = str + items[i].name + ",";
    }
    setcakename(str);
    console.log(str);
  }, []);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  if (isEmpty)
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "20%"
        }}
      >
        Your Cart Is Empty
      </h1>
    );
  console.log(items);
  var today = new Date(),
    currentdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  const handleSubmit = () => {
   
    let order = {
      name: name,
      address: address,
      mobile: mobile,
      cakeName: cakename,
      cakeText: caketext,
      deliverDate: deliverdate,
      status: "pending",
      currentDate: currentdate,
      quantity: totalItems,
      amount: cartTotal
    };
    if (caketext === "" || deliverdate === "") {
      alert("please enter caketext and deliverdate");
    } else {
      var options = {
        key: "rzp_test_bIZ9VWKdhVxeeo",
        key_secret: "J07Bxj9ZGBKs7DyTyhEjmgqp",
        amount: cartTotal * 100,
        currency: "INR",
        name: "CAKE_PROJECT",
        description: "for testing purpose",
        handler: function(response) {
          alert(response.razorpay_payment_id);
          user_service.placeOrder(order).then(res => {
            console.log(res.data);
            alert("order placed successfully");
            return emptyCart();
          });
        },
        prefill: {
          name: "Vaibhav",
          email: "vaibhavjarwekar5526@gmail.com",
          contact: "9657095463"
        },
        notes: { address: "Razorpay Corporate office" },
        theme: { color: "#3399cc" }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    console.log(cakename);
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
    <div style={{ margin: "10px" }}>
      <h4>YOUR CART</h4>
      <br />

      <div style={{ display: "flex" }}>
        {items.map(e => {
          return (
            <div style={{ margin: "10px" }}>
              <div>
                <img src={e.imageUrl} />
                <h5>{e.name}</h5>
                <h5>$ {e.price}</h5>
                <button
                  style={{ background: "#42f9fc", padding: "5px 10px", border: "1px solid #42f9fc", borderRadius: "10px", color:"black" }}
                  onClick={() => updateItemQuantity(e.id, e.quantity - 1)}
                >
                  <i class="fa fa-minus" aria-hidden="true" />&nbsp; Sub
                </button>&nbsp;
                <button
                  style={{ background: "#a6f96c", padding: "5px 10px", border: "1px solid #a6f96c", borderRadius: "10px", color:"black" }}
                  onClick={() => updateItemQuantity(e.id, e.quantity + 1)}
                >
                  <i class="fa fa-plus" aria-hidden="true" />&nbsp; Add
                </button>&nbsp;
                <button
                  onClick={() => removeItem(e.id)}
                  style={{ background: "#fc1717", padding: "5px 10px", border: "1px solid #fc1717", borderRadius: "10px", color:"black" }}
                >
                  <i class="fa fa-times" aria-hidden="true" />&nbsp; Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h6>
        Total price : {cartTotal}
      </h6>
      <div style={{ display: "flex", margin: "10px" }}>
        <div style={{ margin: "10px 10px 10px 0px" }}>
          <input
            type="text"
            style={{ borderRadius: "5px", borderStyle:"none", padding: "7px 15px"}}
            value={caketext}
            placeholder="Enter Cake Text"
            onChange={e => setcaketext(e.target.value)}
          />
        </div>
        <div style={{ margin: "10px 10px 10px 0px" }}>
          <input
            type="date"
            min={disableDates()}
            style={{ lineHeight: "25px", borderRadius: "5px", borderStyle:"none", padding: "6px 15px" }}
            value={deliverdate}
            onChange={e => setdeliverdate(e.target.value)}
          />
        </div>
        <div style={{ margin: "10px 10px 10px 0px" }}>
          <button onClick={emptyCart} style={{ background: "red", padding: "7px 15px", border: "1px solid #fc1717", borderRadius: "10px", color:"black" }}>
            Empty
          </button>
        </div>
        <div style={{ margin: "10px 10px 10px 0px" }}>
          <button onClick={handleSubmit} style={{ background: "#26eb7e", padding: "7px 15px", border: "1px solid #26eb7e", borderRadius: "10px", color:"black" }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
