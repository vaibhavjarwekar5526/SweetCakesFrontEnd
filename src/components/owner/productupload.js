import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router";
import user_service from "../../services/user_service";
import Ownernavbar from "./ownernavbar";
import { useHistory } from "react-router";

const Productupload = () => {
  const [imageurl, setimageurl] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(!localStorage.getItem("adminmail")){
      history.push({
        pathname:"/"
      })
    }
  });

  const fileUploadHandler = () => {
    let product = {
      imageUrl: imageurl,
      name: name,
      price: price,
      description: description
    };
    if (imageurl === "" || name === "" || price === "" || description === "") {
      alert("please fill fields");
    } else {
      user_service.addProduct(product).then(res => {
        console.log(res);
        alert("Product Added Successfully");
        window.location.reload(true);
      });
    }
  };
  return (
    <div>
      <Ownernavbar />
      <div className="content">
        <div className="main">
          <div className="container">
            <div className="register">
              <div className="register-but">
                <form>
                  <div className="register-top-grid">
                    <h3>UPLOAD PRODUCT</h3>
                    <div className="wow fadeInLeft" data-wow-delay="0.4s">
                      <span>
                        Image Url<label>*</label>
                      </span>
                      <input
                        type="text"
                        name="image"
                        value={imageurl}
                        onChange={e => setimageurl(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Name<label>*</label>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        Price<label>*</label>
                      </span>
                      <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={e => setprice(e.target.value)}
                        required
                      />
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <span>
                        description<label>*</label>
                      </span>
                      <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                        required
                      />
                    </div>
                    <div className="clearfix"> </div>
                  </div>

                  <div className="clearfix"> </div>
                  <input
                    type="button"
                    onClick={fileUploadHandler}
                    className="w3-button w3-pink"
                    value="submit"
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

export default Productupload;
