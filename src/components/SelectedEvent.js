import React from 'react';
import "../styles.css";


const SelectedEvent =({event})=>{
    let fullDate = new Date(event.event_start)
    let endDate = new Date(event.event_end)
    let date = fullDate.toLocaleDateString("en-US")
    let time = fullDate.toLocaleTimeString("en-US")
    let endTime  = endDate.toLocaleTimeString("en-US")

    return (
        <div className = "">
            <div className ="">
                {event.title}
            </div>
            <div>
                <h2>Event Details</h2>
                <h3> Date and Time </h3>
                <p>{date}</p>
                <p>{event.event_end? `${time} - ${endTime}` : time}</p>  
            </div> 
            {event.venue&&(
            <div className = "venue">
                <h3>Location</h3>
                {event.venue.name&&(<p>{event.venue.name}</p>)}
                {event.venue.address&&(<p>{event.venue.address}</p>)}
                {event.venue.city&&(<p>{event.venue.city}</p>)}
            </div>
            )}
            {event.description&&(
            <div className="description">
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>
            )};      
        </div>      
    );
};

export default SelectedEvent