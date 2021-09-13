import React, {Component} from 'react';
import Event from "./Event";
import "../styles.css";

class Events extends Component {

    state = {events:[]}

    componentDidMount(){
          fetch('/events')
          .then(res => {
            return res.json()
         }).then(res => {
            this.setState({events: res.events})
         });
    }
    
    render(){
    const renderedEvents = this.state.events.map(event => <Event key={event.id} event={event}/>);
    return (
        <div>
            <div className="container">
                {renderedEvents}
            </div>
        </div>
    )};
}

export default Events;