import React, { Component } from 'react';

class Player3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:props.currentSongUrl,
            img:props.currentSongImage,
            name:props.currentSongName
        }
        setInterval(() => {
            console.log(this.props.song.currentTime + " " + this.props.song.paused + " " + this.props.song.autoplay)
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState );
        console.log(prevProps);
        console.log(this.props);
        console.log(this.state);
        this.props.song.url = this.props.currentSongUrl;
        console.log(this.props.song.url)
       
    }
    
    PlaySong = () => {
        console.log('play button clicked');
        this.props.song.play().then(() => console.log('playing')).catch((err) => console.log('Error Occured: ' + err));
        this.props.song.autoplay=true;
    }
    
    
    render() {
        return (
             <div id="sticky-footer" style={{ background:'#1c1c1c',width:'100%',}}>
             <div  className="container" style={{height:'8vh',color:'white',display:'flex',}}>
                    <div className="SongThumb" style={{width:'20%',justifyContent:'center',marginTop:'10px',display:'flex'}}>
                         <p style={{marginTop:'20px'}}>{this.props.currentSongName}</p>
                        <img src={this.props.currentSongImage?this.props.currentSongImage:require('./../images/no_image.jpg') } width="80x" alt=""/>
                       
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