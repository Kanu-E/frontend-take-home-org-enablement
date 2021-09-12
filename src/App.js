import React, {Component} from "react";
import Events from "./components/Events";

class App extends Component{

  state = {events: []}

  componentDidMount(){
    fetch('/events')
    .then(res => {
      return res.json()
   }).then(res => {
      this.setState({events: res.events})
   });
  }
  
  render(){

    return (
      <div><Events events={this.state.events}/></div>
    )
  }

}

export default App
