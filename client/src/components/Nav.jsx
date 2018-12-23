import React from 'react';
import axios from 'axios';
import RegionList from './RegionList.jsx';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            metros: ['Atlanta/Georgia', 'Boston/New_England', 'Chicago/Illinois', 'Dallas', 'Denver/Colorado', 'Houston', 'Las_Vegas', 'Los_Angeles', 'Miami/South_Florida', 'New Orleans/Louisiana', 'New_York_Area', 'Orange_County', 'San_Francisco_Area', 'San_Diego', 'Seattle_Area'],
            currentMetro: 'Los_Angeles'
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.getCities = this.getCities.bind(this);
    }
    componentDidMount() {
        this.getCities();
    }
    handleSelection(e) {
        let selectedMetro = e.target.innerHTML;
        this.setState({
            currentMetro: selectedMetro
        })
        //cant do promises here so what should i do ?
        console.log("METRO BEFORE", this.state.currentMetro)
        this.getCities();
    }
    getCities() {
        let metro = this.state.currentMetro;
        console.log("METROOO", metro)
        axios.get(`/api/nav/${metro}`)
            .then(data => {
                console.log('DATATTTA', data)
                let result = data.data;
                this.setState({
                    cities: result
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="wrapper">
                <div id="top-nav">
                    Metro     Region
            </div>
                <div id="left-nav">
                    <ul>
                        {this.state.metros.map(metro => <li><a href onClick={this.handleSelection} > {metro} </a></li>)}
                    </ul>
                </div>
                <div id="right-nav">
                    <ul>
                        {this.state.cities.map(city => <li><a href > {city.city} </a></li>)}
                        {/* <RegionList /> */}
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