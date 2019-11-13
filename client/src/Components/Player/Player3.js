import React, { Component } from 'react';

class Player3 extends Component {
   
    
    render() {
        return (
             <div id="sticky-footer" style={{ background:'#1c1c1c',width:'100%',}}>
             <div  className="container" style={{height:'8vh',color:'white',display:'flex',}}>
                    <div className="SongThumb" style={{width:'20%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                         <p style={{marginTop:'20px'}}></p>
                        <img src='./../images/no_image.jpg' width="80x" alt=""/>
                       
                    </div>

                    <div className="SongThumb" style={{width:'10%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                        <button onClick={this.PlaySong}>Play</button>
                        </div>
                    <div className="Slider" style={{width:'70%',marginTop:'30px'}}>
                        <input type="range" min="0" max="100" defaultValue="0" style={{width:'100%'}} />
                    </div>
            </div>
            </div>
        );
    }
}

export default Player3;