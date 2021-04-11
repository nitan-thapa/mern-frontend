import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const Forgetpassword = () => {
    return (
        <>
<Navbar/>
        <br/>
        
        <div className="banner-top">
	<div className="container">
		<h3 >Forget Password</h3>
		<h4><Link to="/">Home</Link><label>/</label>ForgetPassword</h4>
		<div className="clearfix"> </div>
	</div>
</div>

	<div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>Forget Password</h3>
					<form>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required=""/>
							<div className="clearfix"></div>
						</div>
						<button className="btn btn-warning">Send Password Reset Link</button>
					</form>
				</div>
			</div>
		</div>
             
        </>
    )
}

export default Forgetpassword
