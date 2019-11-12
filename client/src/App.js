import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Sections/Header/Header';
import Home from './Components/Home/Home';
import Signin from './Components/Login-Register/Signin';
// import Player2 from './Components/Player/Player2';
function App() {
  var newSong = new Audio;
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/" exact component={()=><Home song={newSong}/>}/>

       <Route path="/login" exact component={Signin}/>

     </Switch>
     {/* <Player2/> */}
    </div>
  );
}

export default App;
