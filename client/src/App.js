import React , {useState,useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Sections/Header/Header';
import Home from './Components/Home/Home';
import Signin from './Components/Login-Register/Signin';
import Player3 from './Components/Player/Player3';
import Player2 from './Components/Player/Player2';
import firebase from './Firebase';

 var newSong = new Audio;
function App() {
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user.uid);
      }
      else{
        console.log('no one logged in')
      }
    })
  })

const [songDet, setSong] = useState({
  name: '',
  url: '',
  image: '',
  artists: '',

}) ;
const selectSong = (param) => {
  setSong({
    name: param.name,
    url: param.url,
    image: param.image,
    artists: param.artists,
  })
}
 
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/" exact component={()=><Home song={newSong} selectSong={selectSong}/>}/>

       <Route path="/login" exact component={Signin}/>

     </Switch>
     {/* <Player2/> */}
              <Player2
                currentSongName={songDet.name}
                currentSongUrl={songDet.url}
                currentSongImage={songDet.image}
                currentSongArtists={songDet.artists}
                song = {newSong}
              />
    </div>
  );
}

export default App;
