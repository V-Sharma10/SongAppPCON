import React, { Component } from 'react'
import axios from 'axios';
import Spinner from './../Sections/Spinner/Spinner';
import HeroImage from '../Sections/DailyImage/HeroImage';
// import Player from '../Player/Player';
import Player2 from '../Player/Player2';
import FourColGrid from './../Sections/FourColGrid/FourColGrid';
import SongThumb from '../Sections/SongThumb/SongThumb';
import './Home.css';
// import Player3 from '../Player/Player3';
export default class Home extends Component {
      constructor(props) {
          super(props);
            this.state={
                loading:true,
                list:[],
                current_song:'',
                song : new Audio(),
            }
        axios.get('http://localhost:5010/').then((res)=>{
            console.log(res.data);
            this.setState({
                loading:false,
                list : res.data,
            })
        })
      }

      changeSong=(song)=>{
          console.log('parent component ');
          console.log(song);
        this.setState({
            current_song:song,
           
            
        })
       
      }

    render() {

        return (
            <div>
                {this.state.loading?<Spinner/>:
                <HeroImage
                    image={this.state.list[0].cover_image}
                    title={this.state.list[0].song}
                    text={this.state.list[0].artists}
                />}
                <br/>
                <div className="home-grid">
                <FourColGrid>
                    {
                        this.state.list.map((element,i)=>{
                            return (
                                <SongThumb key={i}
                                clickable='true'
                                    image = {this.state.list[i].cover_image}
                                    songName = { this.state.list[i].song }
                                    selectSong={this.changeSong}
                                    songUrl={this.state.list[i].url}
                                    
                                    
                                />
                            )
                        })
                    }
                </FourColGrid>
                </div>
                <br/><br/>
                {!this.state.loading?
                <React.Fragment>
                
                {/* <Player 
                currentSongName={this.state.current_song.name}
                currentSongUrl={this.state.current_song.url}
                currentSongImage={this.state.current_song.image}
                song = {this.state.song}
                /> */}

                <Player2 
                currentSongName={this.state.current_song.name}
                currentSongUrl={this.state.current_song.url}
                currentSongImage={this.state.current_song.image}
                song = {this.state.song}
                />
                 {/* <Player3
                currentSongName={this.state.current_song.name}
                currentSongUrl={this.state.current_song.url}
                currentSongImage={this.state.current_song.image}
                song = {this.state.song}
                /> */}
                
                </React.Fragment>
                
                
                :null}
            </div>
        )
    }
}
