import React, { useState } from 'react';
import './Player.css';
import Spinner from '../Sections/Spinner/Spinner';

export default function Player2(props) {
    props.song.src = props.currentSongUrl;

    console.log(props.song.controls)
    console.log(props.song)

     setInterval(() => {
         console.log(props.song.currentTime + " " + props.song.paused + " " + props.song.autoplay);
          
     }, 1000)



    return (
        <div id="sticky-footer" style={{ background:'#1c1c1c',width:'100%',}}>
             <div  className="container" style={{height:'8vh',color:'white',display:'flex',}}>
                    <div className="SongThumb" style={{width:'20%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                         <p style={{marginTop:'20px'}}>{props.currentSongName}</p>
                        <img src={props.currentSongImage?props.currentSongImage:require('./../images/no_image.jpg') } width="80x" alt=""/>
                       
                    </div>

                    <div className="SongThumb" style={{width:'10%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                        <button onClick={
                            ()=>{props.song.play().
                            then((result)=> console.log(result)).
                            catch((err)=> console.log(err));
                            }
                            }>Play</button>

                        < button onClick = {
                            () => {
                                console.log('pause button clicked')
                                if (props.song.pause()!==undefined) {
                                    props.song.pause().then(() => console.log('paused')).catch((err) => console.log(err))
                                }
                            }
                        } > Pause </button>
                        </div>
                    <div className="Slider" style={{width:'70%',marginTop:'30px'}}>
                        <input type="range" min="0" max="100" defaultValue="0" style={{width:'100%'}} />
                    </div>
            </div>
            </div>
    
    )
}
