import React , {useEffect,useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import {logo} from './../../images/logo.png'
import firebase from './../../../Firebase';



const Header = () => {
    const [logged, setLog] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user => {
            if (user) {
                // console.log(user);
                setLog(true);
            }
            else{
                console.log('no user logged in');
            }
        }))
    })
    const Signout = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            setLog(false);
        }).catch(function (error) {
            // An error happened.
        });

    }


    return (
        <div className="header">
            <div className="container-fluid">
            <div className="header-content ">
               <Link to="/"> <img className="logo" src="
               data: image / png;
               base64, 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
               " alt="logo"/></Link>
               <div style={{float:'right',}}>
                   {logged===false?
                    <Link to="/login"><img src={require('./../../images/login.png')} alt="login" width="60px" /></Link>
                    :
                    <React.Fragment>

                        <Link to="/profile"><img src={require('./../../images/profile.png')} alt="profile" width="60px" /></Link>
                        <Link to="/cart"><img src={require('./../../images/cart.png')} alt="cart" width="60px" /></Link>
                    <button onClick={Signout}><img src={require('./../../images/logout.png')} alt="logout" width="60px" /></button>
                    </React.Fragment>}
                    
               </div>
            </div>
            </div>
        </div>
    )
}
 
export default Header;

