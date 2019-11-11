import React, { useState } from 'react';
import './Player.css';
import Spinner from '../Sections/Spinner/Spinner';

export default function Player2(props) {
    var [buffer, isBuffering] =useState(true);
    var lastTime= 0 ;
    var buffering = true;
     props.song.src = props.currentSongUrl;
   
    props.song.play().then((res)=>{
        console.log('playing ' + res)
    }).catch((err)=> console.log(err));
   
    props.song.addEventListener('waiting', () => {
        console.log('waiting');
        
    })
    console.log(props.song.src);
    
    setInterval(()=>{
        console.log(props.song.currentTime);
        lastTime=props.song.currentTime;
        if (lastTime === props.song.currentTime && !props.song.ended && !props.song.paused) {
            isBuffering(false);
        } else {
            isBuffering(true);
        }

         



    },1000)


  

    


    return (
        <div className="player sticky">
            
            <div id="sticky-footer" className="bg-dark " >
                <div className="container-fluid " style={{width:'100%',display:'flex',height:'60px'}}>
                    <div style={{width:"20%"}}>
                        {buffer?<Spinner/>:null} &nbsp;
                        {props.currentSongName} &nbsp;
                        <img alt={props.currentSongName} src={props.currentSongImage} height="60px" style={{marginTop:'5px'}}/>
                        {/* {this.state.buffering===true?'buffering':null} */}
                    </div>
                    <div style={{width:'80%',float:'right',}}>
                      
                        <div style={{display:'flex',textAlign:'center',}}>
                                {props.currentSongName?
                                <i style={{color:'white',fontSize:'28px',padding:'10px',cursor:'pointer'}} className="fa fa-heart fav"></i>
                                :null}
                            {/* {this.song.play()}; */}
                            {/* {song.play()} */}
                        <input style={{width:'85%',marginLeft:'10px'}} type="range" min="0" max="100"
                        // value={slider}
                        className="slider" id="song-range"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    )
}
