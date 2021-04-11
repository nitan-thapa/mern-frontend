import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Forgetpassword from './components/auth/Forgetpassword'
import Resetpassword from './components/auth/Resetpassword'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Homepage from './components/pages/Homepage'

const Routes=()=> {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/forget/password" component={Forgetpassword}/>
                <Route exact path="/reset/password" component={Resetpassword}/>

            </Switch>
        </Router>

            
        </>
    )
}

export default Routes
