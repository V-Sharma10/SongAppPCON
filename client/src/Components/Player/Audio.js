import React, { Component } from 'react'
// import ReactPlayer from 'react-player'
import Spinner from './../Sections/Spinner/Spinner'
export default class Audio extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    render() {
        return (
            <div style={{
                display:'flex'
                }}>
                <i style={{color:'white',fontSize:'28px',padding:'20px',}} className="fa fa-heart"></i>
              <input style={{width:'80%',}} type="range" min="0" max="100" defaultValue="0" class="slider" id="volume-range"/>
            </div>
        )
    }
}
