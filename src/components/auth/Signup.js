import React from 'react'
import Navbar from '../layouts/Navbar'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <Navbar/>
            <br/>
        <div className="banner-top">
	<div className="container">
		<h3 >Register</h3>
		<h4><Link to="/">Home</Link><label>/</label>Register</h4>
		<div className="clearfix"> </div>
	</div>
</div>


	<div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>Register</h3>
					<form>
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text"  name="Username" required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" name="Email"  required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" name="Password"  required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Confirm Password" required=""/>
							<div className="clearfix"></div>
						</div>
						<input type="submit" value="Submit"/>
					</form>
				</div>
				
			</div>
		</div>
        </>
    )
}

export default Signup
