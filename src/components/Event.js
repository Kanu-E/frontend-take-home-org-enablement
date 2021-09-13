import React from 'react';
import "../styles.css";


const Event =({event})=>{
    let fullDate = new Date(event.event_start)
    let endDate = new Date(event.event_end)
    let date = fullDate.toLocaleDateString("en-US")
    let time = fullDate.toLocaleTimeString("en-US")
    let endTime  = endDate.toLocaleTimeString("en-US")
    console.log(event)
    return (
        <div className = "column">
            <div className = "card">
                <div className = "bottom">  
                    <p>{event.event_end? `${time} - ${endTime}` : time}</p>
                    <p>{event.venue? event.venue.name: ''}</p>         
                </div>
                    <img src={event.image_url} alt={event.title} />
                <div>
                    <h2>{event.title}</h2>
                    <p> {date}{event.venue? `, ${event.venue.city}`: ''} </p>
                </div>
            </div>
        </div>      
    );
};

export default Event