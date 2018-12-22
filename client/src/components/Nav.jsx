import React from 'react';
import axios from 'axios';
import RegionList from './RegionList.jsx';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            metros: ['Atlanta/Georgia', 'Baltimore_Area', 'Boston/New_England', 'Chicago/Illinois', 'Dallas', 'Denver/Colorado', 'Houston', 'Las_Vegas', 'Los_Angeles', 'Miami/South_Florida', 'New Orleans/Louisiana', 'New_York_Area', 'Orange_County', 'San_Francisco_Area', 'San_Diego', 'Seattle_Area'],
            currentMetro: 'Los_Angeles'
        }
        this.handleSelection = this.handleSelection.bind(this);
    }
    componentDidMount() {

    }
    handleSelection(e) {
        let selectedMetro = console.log(e.target.value); // NEED THIS TO BE THE SELECTED 
        this.setState({
            currentMetro: selectedMetro
        })
        let metro = this.state.currentMetro; // MAKE DYNAMIC
        axios.get(`/api/nav/${metro}`)
            .then(data => this.setState({
                cities: data.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="wrapper">
                <div id="top-nav">
                    Metro      Region
            </div>
                <div id="left-nav">
                    <ul>
                        {this.state.metros.map(metro => <li><a href onClick={this.handleSelection} > {metro} </a></li>)}
                    </ul>
                </div>
                <div id="right-nav">
                    <ul>
                        {this.state.cities.map(city => <RegionList city={city} />)}
                    </ul>
                </div>
                <div id="bottom-nav">
                    Full List of Metros
                </div>
            </div>
        )
    }
}
export default Nav;