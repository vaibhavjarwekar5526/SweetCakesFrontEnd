import React,{useEffect} from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
const Homepage = ()=>{




    return <div>
			<Navbar/>
        <div className="container">
  <div className="img-slider">
    <script src="js/responsiveslides.min.js"></script>
		
             <div  id="top" className="callbacks_container">
                <ul className="rslides" id="slider4">
                  <li>
                     <img  src="images/slide.jpg" className="img-responsive" alt=""/>
                     <div className="slider-caption">
                        <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<Link to="/login"className="buy-btn">Buy Now</Link>
					          	 </div>
                       <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
                     </div>

                      <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                    <img  src="images/slide.jpg" className="img-responsive" alt=""/>
                    <div className="slider-caption">
                      <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name"alt="image"/></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
                    </div>
                    <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                     <img src="images/slide.jpg" className="img-responsive" alt=""/>
                     <div className="slider-caption">
					          	 <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
					          </div>
                     <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                  <li>
                     <img src="images/slide.jpg" className="img-responsive" alt=""/>
                     <div className="slider-caption">
					            <div className="slider-caption-left text-center">
					          	 	<h1>ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY CAKES?</h1>
					          	 	<p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.</p>
					          	 	<a className="buy-btn" href="#">Buy Now</a>
					          	 </div>
					          	  <div className="slider-caption-right">
					          	  	<a href="#"><img src="images/iteam.png" className="img-responsive" title="name" /></a>
					          	  </div>
					          	  <div className="clearfix"> </div>
					          </div>
                    <div className="share-on">
					          	<div className="share-on-grid">
					          		<div className="share-on-grid-left">
					          			<h3>Share On</h3>
					          		</div>
					          		<div className="share-on-grid-right">
					          			<a href="#"><span className="facebook"> </span></a>
					          			<a href="#"><span className="twitter"> </span></a>
					          			<div className="clearfix"> </div>
					          		</div>
					          		<div className="clearfix"> </div>
					          	</div>
					          	<div className="clearfix"> </div>
					          </div>
                  </li>
                </ul>
             </div>
              <div className="clearfix"> </div>
  </div>
</div>

<div class="top-grids">
			<div class="container">
				<div class="col-md-4 top-grid">
					<div class="top-grid-head">
						<h3>OUR CAKES</h3>
					</div>
					<div class="top-grid-info">
						<img src="images/img1.jpg" class="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						<span>$60</span>
						<div class="clearfix"> </div>
						<a class="btn" href="#">Buy Now</a>
					</div>
				</div>
				<div class="col-md-4 top-grid">
					<div class="top-grid-head">
						<h3>OUR CAKES</h3>
					</div>
					<div class="top-grid-info">
						<img src="images/img2.jpg" class="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						<span>$80</span>
						<div class="clearfix"> </div>
						<a class="btn" href="#">Buy Now</a>
					</div>
				</div>
				<div class="col-md-4 top-grid">
					<div class="top-grid-head">
						<h3>OUR CAKES</h3>
					</div>
					<div class="top-grid-info">
						<img src="images/img3.jpg" class="img-responsive" title="name"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
						<span>$120</span>
						<div class="clearfix"> </div>
						<a class="btn" href="#">Buy Now</a>
					</div>
				</div>
			</div>
			<div class="top-grids-bg">
				<span> </span>
			</div>
		</div>

		<div class="bottom-grids">
			<div class="container">
				<div class="col-md-8 bottom-grid-left">
					<div class="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic2.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div class="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic1.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div class="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic3.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div class="col-md-3 bottom-grid-left-grid text-center">
						<img src="images/pic4.jpg" title="name"/>
						<h4>kids birthday cake</h4>
						<p>$40</p>
					</div>
					<div class="clearfix"> </div>
					<span class="best-sale">Best sellers</span>
					<a href="#" class="order"> </a>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>

		<div class="footer">
		<div class="container">
			<div class="footer-top">
				<div class="col-md-3 location">
					<h4>location</h4>
					<p>#04 Dist.City,State,PK</p>
					<h4>hours</h4>
					<p>Weekdays 7 a.m.-7 p.m.</p>
					<p>Weekends 8 a.m.-7 p.m.</p>
					<p>Call for Holidays Hours.</p>
				</div>
				<div class="col-md-3 customer">
					<h4>customer service</h4>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
					<h4>phone</h4>
					<h6>1(234)567-8910</h6>
					<h4>contact us</h4>
					<h6>contact us page.</h6>
				</div>
				<div class="col-md-3 social">
					<h4>get social</h4>
					<div class="face-b">
						<img src="images/foot.png" title="name"/>
						<a href="#"><i class="fb"> </i></a>
					</div>
					<div class="twet">		
						<img src="images/foot.png" title="name"/>
							<a href="#"><i class="twt"> </i></a>
					</div>	
				</div>
				<div class="col-md-3 sign">
					<h4>sign up for news later</h4>	
						<form>
						<input type="text" class="text" value="YOUR EMAIL" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'YOUR EMAIL ';}"/>
						</form>
				</div>
					<div class="clearfix"> </div>
			</div>
		</div>
	</div>
    </div>
}

export default Homepage;