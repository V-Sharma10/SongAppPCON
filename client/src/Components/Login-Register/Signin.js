import React, { Component } from 'react'
import './Style.css'
import firebase  from './../../Firebase'
import {Redirect, Link} from 'react-router-dom';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            pwd:'',
            islogged:false
        }
    }

    SignInWithGoogle =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(result);
            this.setState({islogged:true})
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }
    
    render() {
        if (this.state.islogged) {
            return <Redirect to = "/" />
        }
        return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100" style={{padding: '50px',}}>
				<div className="login100-pic js-tilt" data-tilt>
					<img src={require("./../images/img-01.png")} alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<Link className="txt2" to="/">
							Username / Password?
						</Link>
					</div>

					<div className="text-center p-t-136">
						<Link className="txt2" to="/">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
              <button disabled> &nbsp; &nbsp; &nbsp; &nbsp;OR </button>
                <br/>
                {/* <label for="googleLogin">Sign In with </label> */}
            <button id="googleLogin" onClick={this.SignInWithGoogle}><img src={require("./../images/google-logo.png") } alt="google" width="70%"/><br/>Google Sign In</button>

			</div>

		</div>
	</div>
	
        )
    }
}
