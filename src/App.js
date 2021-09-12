import React, {Component} from "react"

class App extends Component{


  componentDidMount(){
    fetch('/events')
    .then(res => {
      return res.json()
   }).then(res => {
     console.log(res)
     ;
   })
  }
  
  
  render(){

    return (
      <div>Events</div>
    )
  }

}

export default App
