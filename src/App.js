import React, {Component} from 'react';
import Header from "./Header"
import "./App.css"

class App extends Component{
  render() {
    let subscribers = [
      {
      id: 1,
      name: "Shilpa Bhat",
      phone: "88888888888"
      },

      {
        id: 1,
        name: "Srishti Gupta",
        phone: "9999999999"
        }

    ]
    return(
      <div>
      <Header/>
    <button className="btnButton"> Add </button>
    <div id="textSpacing">
      <span className="nameStyle">Name</span>
      <span className="nameStyle" id="phoneStyle-container">Phone</span>
    </div>
    {
      subscribers.map(sub => {
        return <div key = {sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item" id="phoneStyle">{sub.phone}</span>
          </div>

      })


    }
    </div>
    );
}
}

export default App;
