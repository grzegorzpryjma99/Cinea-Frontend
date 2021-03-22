import React, { Component } from "react";
import "./App.css"
import Header from "./Header"
import Proposed from "./Proposed"
import Repertoire from "./Repertoire"

import Film from "./Film"

class App extends Component{
  
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/films/all')
      .then(response => response.json())
      .then(data => { 
        console.log(data);
        this.setState({ data })
      }
      );
  }

  render() {
    return (
    <div class="repertoire">
        <Header />
        {this.state.data.map(film => <Film info={film}/>)}
        <Proposed />
        <Repertoire />
    </div>
    );
  }
}

export default App;




