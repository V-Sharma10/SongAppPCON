import React, { useState } from 'react';
import './Player.css';

export default function Player2(props) {
   var [slider, setSlider] = useState(props.song.currentTime);
   var [buffer, isbuffering] = useState(false);
   
    
     props.song.src = props.currentSongUrl;
    //  setCount(count=1);
    props.song.addEventListener("error", function () {
        if (props.song.error) {
            console.log(props.song.error.code);

        }
        if(props.song.error.code === 20){
            console.log('AbortError');
        }
    }, false);
    // props.song.paused=false;
    // props.song.autoplay = true;
    props.song.play().then(()=>{

    }).catch(err => console.log(err));
    console.log(props.song.play());
    
    console.log(props.song.src);
    setInterval(() => {
        console.log(props.song.currentTime + "/" + props.song.duration + ";is paused: " + props.song.paused + ";isSeeking: " + props.song.seeking + "; Volume:" + props.song.volume + ";autoplay: " + props.song.autoplay);
        // setSlider(slider=props.song.currentTime);
        
    }, 1000);
    var time = 0;
    setInterval(() => {
        if (props.song.currentTime === time && props.song.paused===false && !props.song.ended) {
            console.log('buffering');
            isbuffering(buffer=true);
        }
        time = props.song.currentTime;
    }, 1000)

    

    return (
        <div class="player sticky">
            {buffer?'buffering':null};<br/>
            <div id="sticky-footer" class="bg-dark " >
                <div class="container-fluid " style={{width:'100%',display:'flex',height:'60px'}}>
                    <div style={{width:"20%"}}>
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
                        value={slider}
                        className="slider" id="song-range"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    )
}
