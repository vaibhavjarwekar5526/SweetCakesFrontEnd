import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

const Product = ()=>{
    return <div>
			<Navbar/>
        <script type="text/javascript" src="https://unpkg.com/load-js@1.2.0"></script>
        <div className="biseller-info">
<div className="container">
    <h2>Products</h2>
<h3 className="new-models">new varieties</h3>
			<ul id="flexiselDemo3">
				<li>
					<div className="biseller-column">
					<img src="images/11.jpg" alt="" className="veiw-img"/>
						<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Delicious</h4>
						<p>$ 170.99</p>
					</div>
								
					</div>
				</li>
				<li>
					<div className="biseller-column">
					<img src="images/12.jpg" alt="" className="veiw-img"/>
						<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Printed Cake</h4>
						<p>$ 600.99</p>
					</div>
										
					</div>
				</li>
			
				<li>
					<div className="biseller-column">
					<img src="images/13.jpg" alt="" className="veiw-img"/>
						<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Forest Egg</h4>
						<p>$ 400.99</p>
					</div>
						
					</div>
				</li>
				<li>
					<div className="biseller-column">
					<img src="images/14.jpg" alt="" className="veiw-img"/>
						<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Butter Scotch </h4>
						<p>$ 219.99</p>
					</div>
						
					</div>
				</li>
	     	</ul>
</div>
    </div>
    
               <div className="best-seller">
				<div className="container">
					<div className="biseller-info">
					 <h3 className="new-models">varieties</h3>
					<ul id="flexiselDemo1">
						<li>
							<div className="biseller-column">
							<img src="images/18.jpg" alt=""/>
							<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Chocolate </h4>
						<p>$ 200.99</p>
					</div>
						
							</div>
						</li>
						<li>
							<div className="biseller-column">
							<img src="images/15.jpg" alt=""/>
							<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Birthday Cakes </h4>
						<p>$ 180.99</p>
					</div>
						
							</div>
						</li>
						<li>
							<div className="biseller-column">
							<img src="images/16.jpg" alt=""/>
							<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Flower Types </h4>
						<p>$ 140.99</p>
					</div>
						
							</div>
						</li>
						<li>
							<div className="biseller-column">
							<img src="images/17.jpg" alt=""/>
							<div className="veiw-img-mark">
							<Link to="/Quickview">Quick view</Link>
						</div>
					<div className="biseller-name">
						<h4>Sheet Cake </h4>
						<p>$ 150.99</p>
					</div>
					
							</div>
						</li>
			     	</ul>
					</div>
			</div>
			</div>
			<div className="clearfix"></div>
			<div className="footer">
		<div className="container">
			<div className="footer-top">
				<div className="col-md-3 location">
					<h4>location</h4>
					<p>#04 Dist.City,State,PK</p>
					<h4>hours</h4>
					<p>Weekdays 7 a.m.-7 p.m.</p>
					<p>Weekends 8 a.m.-7 p.m.</p>
					<p>Call for Holidays Hours.</p>
				</div>
				<div className="col-md-3 customer">
					<h4>customer service</h4>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
					<h4>phone</h4>
					<h6>1(234)567-8910</h6>
					<h4>contact us</h4>
					<h6>contact us page.</h6>
				</div>
				<div className="col-md-3 social">
					<h4>get social</h4>
					<div className="face-b">
						<img src="images/foot.png" title="name"/>
						<a href="#"><i className="fb"> </i></a>
					</div>
					<div className="twet">		
						<img src="images/foot.png" title="name"/>
							<a href="#"><i className="twt"> </i></a>
					</div>	
				</div>
				<div className="col-md-3 sign">
					<h4>sign up for news later</h4>	
						<form>
							<input type="text" className="text" value="YOUR EMAIL" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'YOUR EMAIL ';}"/>
						</form>
				</div>
					<div className="clearfix"> </div>
			</div>
			<div className="footer-bottom">
			
			</div>
		</div>
	</div>

    </div>
}

export default Product;