import React,{useState,useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';
import Usernavbar from './usernavbar';
import axios from 'axios';

export const Searchpage = () => {
    const history = useHistory();
    const location = useLocation();
    const name = localStorage.getItem("name");
    const address = localStorage.getItem("address");
    const mobile = localStorage.getItem("mobile");
    const id = localStorage.getItem("id");
    const searchword = localStorage.getItem("searchword");
    const[newvariety,setNewvariety]=useState([]);
	useEffect(() => {
    if(!localStorage.getItem("email")){
		  history.push({
			pathname:"/"
		  })}
 axios.get('http://localhost:3001/retrievesearchimages/'+searchword).then((response)=>{
		setNewvariety(response.data);
		console.log(response); 
	})
	}, [])
    return (
        <div>
             <Usernavbar name={name}address={address}mobile={mobile}id={id}/>
             <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">

          <h2></h2>
          <p></p>
        </div>

        <div className="row">
           {newvariety.map((prod,index)=>{
          return <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
            <div className="member" data-aos="fade-up" data-aos-delay="100">
           
              <div className="member-img">
                <img src={'uploads/images/'+prod.image} className="img-fluid" alt=""/>
                <div className="social">
                  <a><i className="fa fa-shopping-cart"onClick={()=>history.push({pathname:"/detailspage",state:{name:name,address:address,mobile:mobile,image:'uploads/images/'+prod.image,cakename:prod.name,price:prod.price,description:prod.description,id:id}})}></i></a>
                </div>
              </div>
              
              <div className="member-info">
                <h4>{prod.name}</h4>
                <span>{'$'+prod.price}</span>
              </div>
           
            </div>    
          </div>
           })
              }
        </div>
      </div>
     
    </section>
        </div>
    )
}
