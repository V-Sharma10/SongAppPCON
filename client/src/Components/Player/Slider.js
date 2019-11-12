import React from 'react'

export default function Slider(props) {
    var slide = (props.time / props.duration )* 100;
    if(isNaN(slide)){
        slide = 0;
    }
    else{
        slide = (props.time / props.duration) * 100;
    }
    return (
        <div>
             <input type="range" min="0" max="100" 
                         value={slide}
                          style={{width:'100%'}} />
        </div>
    )
}
