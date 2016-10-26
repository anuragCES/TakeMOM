import React, {Component} from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class Login extends Component {
 render () {
     return (
         <div className='login-cont'>
            <Jumbotron>
                Take MOM
            </Jumbotron>
            <div className="login-box">
                <h1 className='header'>
                    Login
                </h1>
                <div className='card-flexbox'>
                    <input type='text' placeholder='username'/>
                    <input type='text' placeholder='password'/>
                    <Button bsStyle="success">Login</Button>
                </div>
            </div>
        </div>
     )
 }
}

export default Login