import React, { useState, useEffect } from "react";
import Ownernavbar from "./ownernavbar";
import user_service from "../../services/user_service";
import { useHistory } from "react-router";
function OwnerHomeproduct() {
  const history = useHistory();
  const [newvariety, setNewvariety] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem("adminmail")){
      history.push({
        pathname:"/"
      })
    }
    user_service.getProduct().then(response => {
      setNewvariety(response.data);
      console.log(response);
    });
  }, []);

  const deleteCake = id => {
    user_service.deleteProduct(id).then(() => {
      window.location.reload(true);
    });
  };

  return (
    <React.Fragment>
      <Ownernavbar />
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
                            className="fa fa-trash"
                            onClick={() => deleteCake(prod.id)}
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
    </React.Fragment>
  );
}

export default OwnerHomeproduct;
