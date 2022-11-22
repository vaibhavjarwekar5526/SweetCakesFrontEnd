import React from "react";
import $ from "jquery";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="top-header">
        <div className="container">
          <div className="top-header-right">
            <ul>
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
                  <input type="submit" value="" />
                </form>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
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

export default Navbar;
