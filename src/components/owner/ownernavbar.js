import React from "react";
import $ from "jquery";
import { BrowserRouter, Link, useHistory } from "react-router-dom";

const Ownernavbar = props => {
  const history = useHistory();
 
  const handleSubmit = () => {
    history.push({
      pathname: "/owneraccount",
     
    });
  };
  const update = () => {
    history.push({
      pathname: "/Productupload",
      
    });
  };
  const orders = () => {
    history.push({
      pathname: "/orderretrieve",
      
    });
  };

  const remainder = () => {
    history.push({
      pathname: "/reminder",
    });
  };

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
              <li>
                <a style={{ color: "white" }} href="" onClick={update}>
                  Update
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} href="" onClick={orders}>
                  Orders
                </a>
              </li>
              <div className="clearfix"> </div>
            </ul>
          </div>
          <div className="top-header-center">
            <p>
              <span className="cart"> </span>Cart<label>$5256</label>
            </p>
          </div>
          <div className="top-header-right">
            <ul>
              <li>
                <form  style={{visibility:"hidden"}}>
                  <input type="text" />
                  {/* <input type="submit" value="" /> */}
                </form>
              </li>
              <li>
                <Link to="/"onClick={()=>{
                  localStorage.clear();
                }}>Logout</Link>
              </li>
              <li>
                <a style={{ color: "white" }} href="" onClick={remainder}>
                  Reminder
                </a>
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
                <a href="products.html">products</a>
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

export default Ownernavbar;
