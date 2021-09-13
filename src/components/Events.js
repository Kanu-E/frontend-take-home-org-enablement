import React, {Component} from 'react';
import Event from "./Event";
import "../styles.css";

class Events extends Component {

    state = {
        events:[], 
        eventsLoaded: 3,
        selectedEvent: null
    }

    componentDidMount(){
        fetch('/events')
            .then(res => {
                return res.json()
            }).then(res => {
                this.setState({events: res.events})
        });
    }

    handleChange = (eventId) => {   
        this.setState({selectedEvent: eventId})    
    }



    render(){
    let renderedEvents = this.state.events.slice(0, this.state.eventsLoaded).map(event => {
        return <Event key={event.id} event={event} 
        handleChange={this.handleChange}/>
    });
    let selected;
    if(this.state.selectedEvent) selected = this.state.events.find(event => event.id === this.state.selectedEvent)
    console.log(selected)
    return ( 
        <div >
            {renderedEvents}
            {selected&&(
                <div>
                    got selected
                </div>
            )}
            <button onClick={()=>this.setState({eventsLoaded:this.state.eventsLoaded+3})} className="btn btn-more"> Load More </button>      
        </div>
    )};
}

export default Events;