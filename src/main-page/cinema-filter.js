import { Component } from "react";

class CinemaFilter extends Component{
    state = {}

    onSearchChange = (e) => {
        const cinema = e.target.value;
        this.props.filterCinemas(cinema);
    }

    render() {
        const search = this.state.search;
        const cinemas = this.props.cinemas || [];

        return(
            <div>
                <div>
                    dasdas
                </div>

                <div>
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {cinemas.map((c)=> <option key={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export default CinemaFilter;