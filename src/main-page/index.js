import React, { Component } from "react";
import "./main-page.css"
import Header from "./Header"
import ProposedFilm from "./Proposed"
import CinemaFilter from "./cinema-filter"
import SearchResults from "../search-results";

class App extends Component{
  
  state = {
    allFilms: [],
  }

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = () =>{
    fetch('http://localhost:8080/api/films/all')
    .then(response => response.json())
    .then(allFilms => { 
      this.allFilms = allFilms;
      this.checkFilmToPropose();

      this.setState({allFilms})
      this.determinedUniqueCinemas();
    }
    );
  }

  checkFilmToPropose = () =>{
    if (this.allFilms) {
      const tmp = Math.floor(Math.random() * this.allFilms.length);;
      const checkedFilm = this.allFilms[tmp];
      this.setState({checkedFilm})
    };
  }

  determinedUniqueCinemas =() =>{
    const cinemas = this.allFilms
    ? Array.from(new Set(this.allFilms.map(h => h.cinema)))
    : [];
    cinemas.unshift(null);
    this.setState({cinemas});
  }

  filterCinemas = (cinema) => {
    this.setState({activeCinema: null});
    const filteredCinemas = this.allFilms.filter((h) => h.cinema == cinema);
    this.setState({filteredCinemas});
    this.setState({cinema});
  }

  setActiveCinema = (cinema) => {
    this.setState({ activeCinema: cinema});
  }

  render() {
    let activeComponent = null;
    if (this.state.cinema)
    activeComponent = <SearchResults cinema={this.state.cinema}
      filterCinemas ={this.state.filterCinemas} setActiveCinema = {this.setActiveCinema} />
    if (!activeComponent)
      activeComponent = <ProposedFilm cinema={this.state.ProposedFilm} />
    return (      
      <div className="container">
        <Header location="Kraków - Galeria Krakowska"/>
        <CinemaFilter cinemas={this.state.cinemas} filterCinemas = {this.filterCinemas} />
        {activeComponent}
        <ProposedFilm film={this.state.checkedFilm} /> 
      </div>
    );
  }
}

export default App;




