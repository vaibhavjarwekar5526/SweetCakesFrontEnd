import React,{useEffect} from 'react'
import Navbar from './navbar'

export const About = () => {

    return (
        <div>
				<Navbar/>
            <div className="about">
						<div className="container">
							<h3>About</h3>
							<img src="images/about.jpg" className="img-responsive" title="image-name" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							<p>tncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							<a href="#">Readmore</a>
						</div>
			</div>
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
    )
}
