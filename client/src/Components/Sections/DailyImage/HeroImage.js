import React from 'react';
import './HeroImage.css';

export default function HeroImage(props) {
    return (
        <div className="container-fluid heroimage"
            style={{  
                background:
                   `linear-gradient(to bottom,rgba(0,0,0,0)39%,rgba(0,0,0,0)41%,rgba(0,0,0,0.65)100%),  
                    url('${props.image}'),#1c1c1c`
            }}>
            
             <aside style={{width:'20%',float:'left',}}>
                    <table>
                        <thead>
                        <tr>
                        <th className="vertical"><div className="vertical">Top Song of the Day</div></th>
                        </tr>
                        </thead>
                    </table>
                </aside>
            <div className="container heroimage-content">
               
                <div className="heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}
            
