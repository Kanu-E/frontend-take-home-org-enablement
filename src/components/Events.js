import React from 'react';
import Event from "./Event";
import "../styles.css";

const Events =({events})=>{
    const renderedEvents = events.map(event => <Event key={event.id} event={event}/>);
    return (
        <div>
            <div className="container">
                {renderedEvents}
            </div>
        </div>

    )
}

export default Events;