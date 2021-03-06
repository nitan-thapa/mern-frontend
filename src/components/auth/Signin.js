import React from 'react'
import Navbar from '../layouts/Navbar'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <>
        <Navbar/>
        <br/>
        
        <div className="banner-top">
	<div className="container">
		<h3 >Login</h3>
		<h4><Link to="/">Home</Link><label>/</label>Login</h4>
		<div className="clearfix"> </div>
	</div>
</div>

	<div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>Login</h3>
					<form>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Password" required=""/>
							<div className="clearfix"></div>
						</div>
						<input type="submit" value="Login"/>
					</form>
				</div>
				<div className="forg">
					<Link to="/forget/password" className="forg-left">Forgot Password</Link>
					<Link to="/signup" className="forg-right">Register</Link>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
            
        </>
    )
}

export default Signin
