import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Spinner from './../Sections/Spinner/Spinner'
export default class Audio extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    render() {
        return (
            <div style={{
                // height:'10px',
                }}>
                
                {/* <ReactPlayer 
                url={this.props.song}
                 playing onBuffer="qwert" playIcon/> */}

                 <figure style={{width:'100%',}}>
                    {/* <figcaption>Listen to the T-Rex:</figcaption> */}
                    <audio style={{width:'100%',}}
                        controls
                        src={this.props.song}>
                            Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                </figure>
            </div>
        )
    }
}
