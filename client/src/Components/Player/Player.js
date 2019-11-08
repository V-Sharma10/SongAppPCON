import React from 'react'
import './Player.css'
import Audio from './Audio'

export default function Player(props) {
    
    return (
        <div class="player sticky">
            <div id="sticky-footer" class="bg-dark " style={{padding:'5px',}} >
                <div class="container-fluid text-center" style={{width:'100%',}}>
                    <div style={{width:"20%",}}>
                <small>{props.currentSong}</small>
                </div>
                <div style={{width:'80%',float:'right',}}>
                <Audio song={props.currentSong} />
                </div>
                </div>
            </div>
        </div>
    )
}
