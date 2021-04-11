import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const Resetpassword = () => {
    return (
        <>
        <Navbar/>
        <br/>

        <div className="banner-top">
            <div className="container">
                <h3 >Reset Password</h3>
                <h4><Link to="/">Home</Link><label>/</label>ResetPassword</h4>
                <div className="clearfix"> </div>
            </div>
        </div>

            <div className="login">
            
                <div className="main-agileits">
                        <div className="form-w3agile">
                            <h3>Reset Password</h3>
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
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input  type="password"  name="ConfirmPassword" required=""/>
                                    <div className="clearfix"></div>
                                </div>
                                <button className="btn btn-primary">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Resetpassword
