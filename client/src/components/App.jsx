import React from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Search from './Search.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cities: [],
            navBoo: false,
            searchBoo: false
        }
        this.handleClickNav = this.handleClickNav.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }
    handleClickNav() {
        this.setState({
            navBoo: !(this.state.navBoo)
        })
    }
    handleClickSearch() {
        this.setState({
            searchBoo: !(this.state.searchBoo)
        })
    }

    render() {
        let navClicked = this.state.navBoo;
        let searchClicked = this.state.searchBoo;
        return (
            <div>
                <button onClick={this.handleClickNav} >NavBRUHH</button>
                {navClicked ? (<Nav />) : (<div></div>)}
                <button onClick={this.handleClickSearch}>SEARCH4YOBITCH</button>
                {searchClicked ? (<Search />) : (<div></div>)}
            </div >
        )
    }
}

export default App;