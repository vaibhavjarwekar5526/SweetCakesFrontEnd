import React, { useState } from "react";
import $ from "jquery";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";

const Usernavbar = props => {
  const history = useHistory();
  const name = props.name;
  const address = props.address;
  const mobile = props.mobile;
  const id = props.id;
  const { totalItems } = useCart();

  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    history.push({
      pathname: "/useraccount",
     
    });
  };
  const myOrder = () => {
    history.push({
      pathname: "/myorder",
     
    });
  };
  // const searchFunction = () => {
  //   if (search === "") {
  //     alert("Enter Cake Name");
  //   } else {
  //     localStorage.setItem("searchword",search);
  //     history.push({
  //       pathname: "/search",
  //     });
  //   }
  // };
  return (
    <React.Fragment>
      <div className="top-header">
        <div className="container">
          <div className="top-header-left">
            <ul>
              <li>
                <a style={{ color: "white" }} href="" onClick={handleSubmit}>
                  My Account
                </a>
              </li>
              <div className="clearfix"> </div>
            </ul>
          </div>
          <div className="top-header-center">
            <p
              onClick={() => {
                history.push({
                  pathname: "/addtocart",
                
                });
              }}
            >
              <span className="cart"> </span>Cart<label>{totalItems}</label>
            </p>
          </div>
          <div className="top-header-right">
            <ul>
              <li>
                <form style={{visibility:"hidden"}}>
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <input
                    type="button"
                    className="search"
                  />
                </form>
              </li>
              <li>
                <a style={{ color: "white" }} href="" onClick={myOrder}>
                  My Orders
                </a>
              </li>
              <li>
                <Link to="/"onClick={()=>{
                  localStorage.clear();
                }}>Logout</Link>
              </li>
            </ul>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="container">
          <div className="head-nav">
            <span
              className="menu"
              onClick={() =>
                $(".head-nav ul").slideToggle(300, function() {
                  // Animation complete.
                })}
            >
              {" "}
            </span>
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">products</Link>
              </li>
              <li>
                <Link to="/About">about</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <div className="clearfix"> </div>
            </ul>
          </div>

          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" title="Sweetcake" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Usernavbar;
