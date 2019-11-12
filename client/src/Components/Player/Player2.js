import React, { useState , useEffect } from 'react';
import './Player.css';
import Spinner from '../Sections/Spinner/Spinner';
import Slider from './Slider';

export default function Player2(props) {
    var [slide,setSlide]=useState(0);
    var time =0;
    var duration = 0;
    props.song.src = props.currentSongUrl;
    props.song.autoplay=true;
    console.log(props.song.controls)
    console.log(props.song)
    
         
           

       setInterval(() => {
            //   console.log(props.song.currentTime + " " + props.song.paused + " " + props.song.autoplay);
            //   console.log((props.song.currentTime / props.song.duration) * 100 + 'dfghjk');


              //   setSlide((props.song.currentTime / props.song.duration) * 100)
              // if (!isNaN(props.song.currentTime / props.song.duration))
              // {var timePassed = (props.song.currentTime / props.song.duration) * 100;
              // setSlide(timePassed)}
            //   console.log(slide);
              time = props.song.currentTime;
              duration = props.song.duration;
          }, 1000)
     
//  const  Slider=()=>{
//                     return <Slider
//                             time={time} 
//                             duration={duration}
//                             />}
         
  


    return (
        <div id="sticky-footer" style={{ background:'#1c1c1c',width:'100%',}}>
             <div  className="container" style={{height:'8vh',color:'white',display:'flex',}}>
                    <div className="SongThumb" style={{width:'20%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                         <p style={{marginTop:'20px'}}>{props.currentSongName}</p>
                        <img src={props.currentSongImage?props.currentSongImage:require('./../images/no_image.jpg') } width="80x" alt=""/>
                       
                    </div>

                    <div className="SongThumb" style={{width:'10%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                      
                        <button onClick={
                            ()=>{props.song.play()
                            .then((result)=> console.log(result))
                            .catch((err)=> console.log(err));
                            }
                            }>
                                <img 
                                src={require('./../images/play.png')}
                                 alt="Play" width="60px"/>
                            </button>
                            
                       
                        < button onClick = {
                            () => {
                                console.log('pause button clicked')
                                if (props.song.pause()!==undefined) {
                                    props.song.pause().then(() => console.log('paused')).catch((err) => console.log(err))
                                }
                            }
                        } >
                              <img 
                                src={require('./../images/pause.png')}
                                 alt="Pause" width="60px"/>
                             </button>
                             
                             
                        


                        </div>
                    <div className="Slider" style={{width:'70%',marginTop:'30px'}}>
                            

                            {/* {Slider()} */}
                            <Slider/>
                       
                    </div>
            </div>
            </div>
    
    )
}
