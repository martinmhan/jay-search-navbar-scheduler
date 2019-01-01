import React from 'react';
import axios from 'axios';
import style from '../css/Nav.css';

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
        selectedMetro = selectedMetro.slice(1, selectedMetro.length);
        let context = this;
        this.setState({
            currentMetro: selectedMetro
        }, () => {
            context.getCities();
        })
    }
    getCities() {
        let metro = this.state.currentMetro;
        // console.log("METROOO", metro)
        axios.get(`/api/nav/${metro}`)
            .then(data => {
                // console.log('DATATTTA', data)
                let result = data.data;
                this.setState({
                    cities: result
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className={style.locationContainer}>
                <div className={style.topLocationNav}>
                    <div className={style.locationNavText}>Metro</div>
                    <div className={style.locationNavText}>Region</div>
                </div>
                <div className={style.midLocationNav}>
                    <div className={style.leftMidLocationNav}>
                        <ul className={style.regionList}>
                            <div>
                                {this.state.metros.map(metro => <div className={style.singleRegionDiv}><a href onClick={this.handleSelection}> {metro} </a></div>)}
                            </div>
                        </ul>
                    </div>
                    <div className={style.rightMidLocationNav}>
                        <ul className={style.cityList}>
                            {this.state.cities.map(city => <div className={style.singleCityDiv}><a href> {city.city} </a></div>)}
                        </ul>
                    </div>
                </div>
                <div className={style.bottomLocationNav}>
                    <div className={style.smallText}>Full List of Metros</div>
                </div>
            </div>
        )
    }
}
export default Nav;