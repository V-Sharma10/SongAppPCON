import React from 'react'
import './Player.css'
import Audio from './Audio'

export default function Player(props) {
    console.log(props.currentSongName);
    console.log(props.currentSongUrl);
    console.log(props.currentSongImage);
    return (
        <div class="player sticky">
            <div id="sticky-footer" class="bg-dark " style={{padding:'5px',}} >
                <div class="container-fluid " style={{width:'100%',}}>
                    <div style={{width:"20%",textAlign:'center',}}>
                        {props.currentSong}
                        <img src={props.currentSongImage} width="80px"/>
                    </div>
                    <div style={{width:'80%',float:'right',}}>
                        <Audio song={props.currentSong} />
                    </div>
                </div>
            </div>
        </div>
    )
}
