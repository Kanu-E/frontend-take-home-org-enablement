import React from 'react';



const Event =({event})=>{
    let fullDate = new Date(event.event_start)
    let endDate = new Date(event.event_end)
    let date = fullDate.toLocaleDateString("en-US")
    let time = fullDate.toLocaleTimeString("en-US")
    let endTime  = endDate.toLocaleTimeString("en-US")
    return (
    <div>
        <div>  
            <div>{event.event_end? `${time} - ${endTime}` : time}</div>
            <div>{event.venue? event.venue.name: 'Venue TBD'}</div>
            <img src={event.image_url} alt={event.title} />
        </div>
        <div>{event.title}</div>
        <div>{date}, {event.venue? event.venue.city: 'City TBD'}</div>
        
    </div>
    );
};

export default Event