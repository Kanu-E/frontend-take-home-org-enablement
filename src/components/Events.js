import React from 'react';
import Event from "./Event";

const Events =({events})=>{
    const renderedEvents = events.map(event => <Event key={event.id} event={event}/>);
    return (
        <div className="container">
            {renderedEvents}
        </div>
    )
}

export default Events;