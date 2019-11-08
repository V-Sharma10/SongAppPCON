import React from 'react'
import './Player.css'
import Audio from './Audio'

export default function Player(props) {
    
    return (
        <div class="player sticky">
            <div id="sticky-footer" class="py-4 bg-dark text-white-50">
                <div class="container text-center">
                <small>Audio Player <br/> {props.currentSong}</small>
                <Audio song={props.currentSong} />
                </div>
            </div>
        </div>
    )
}
