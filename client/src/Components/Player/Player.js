import React, { Component } from 'react'

export default class Player extends Component {
    constructor(props){
        super(props)
        this.state={
            slider:0,

        }
        this.props.song.src = this.props.currentSongUrl;
        this.props.song.play();
    }
     componentDidMount(){

        setInterval(() => {
            
            console.log(this.props.song.src);

            
            console.log(this.props.song);
        }, 1000);
        
    }
    
    sildeTime=(e)=>{
        console.log(e.target);

    }
    render() {
        return (
           <div className="player sticky">
            <div id="sticky-footer" className="bg-dark " >
                <div className="container-fluid " style={{width:'100%',display:'flex',height:'60px'}}>
                    <div style={{width:"20%"}}>
                        {this.props.currentSongName} &nbsp;
                        <img alt={this.props.currentSongName} src={this.props.currentSongImage} height="60px" style={{marginTop:'5px'}}/>
                        {/* {this.state.buffering===true?'buffering':null} */}
                    </div>
                    <div style={{width:'80%',float:'right',}}>
                      
                        <div style={{display:'flex',textAlign:'center',}}>
                                {this.props.currentSongName?
                                <i style={{color:'white',fontSize:'28px',padding:'10px',cursor:'pointer'}} className="fa fa-heart fav"></i>
                                :null}
                            {/* {this.song.play()}; */}
                            {/* {song.play()} */}
                        <input style={{width:'85%',marginLeft:'10px'}} type="range" min="0" max="100"  
                        value={this.state.slider} onChange={this.sildeTime}
                        className="slider" id="song-range"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
