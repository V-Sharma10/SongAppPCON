import React from 'react'
import './Player.css'
export default function Player(props) {
    // var song = new Audio();
    // song.src=props.currentSongUrl;
    // song.play();
    props.song.src=props.currentSongUrl;
    console.log(props.song.src);
    props.song.play();
    return (
        <div class="player sticky">
            <div id="sticky-footer" class="bg-dark " >
                <div class="container-fluid " style={{width:'100%',display:'flex',height:'60px'}}>
                    <div style={{width:"20%"}}>
                        {props.currentSongName} &nbsp;
                        <img alt={props.currentSongName} src={props.currentSongImage} height="60px" style={{marginTop:'5px'}}/>
                    </div>
                    <div style={{width:'80%',float:'right',}}>
                      
                        <div style={{display:'flex',textAlign:'center',}}>
                                {props.currentSongName?
                                <i style={{color:'white',fontSize:'28px',padding:'10px',cursor:'pointer'}} className="fa fa-heart fav"></i>
                                :null}
                            {/* {this.song.play()}; */}
                            {/* {song.play()} */}
                        <input style={{width:'85%',marginLeft:'10px'}} type="range" min="0" max="100" defaultValue="0"  className="slider" id="song-range"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
