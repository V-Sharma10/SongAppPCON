import React from 'react';
import './SongThumb.css';
import { Link } from 'react-router-dom';
export default function SongThumb(props) {

    const updateSong=()=>{
        console.log(props.songUrl + 'child ');
       return props.selectSong(props.songUrl);
    }
    return (
        <div className="moviethumb">
            <div>
                {props.clickable?
               <img style={{cursor:'pointer',size:'cover!important'}} onClick={updateSong} className="" src={props.image} alt = "" />
                 : <img className="" src={props.image} alt = "" />
                 }
               
            </div>
            <p className="" style={{ alignText: 'center', alignItems: 'center', alignContent:'center'}}>{props.songName}</p>
        </div>
    )
}

