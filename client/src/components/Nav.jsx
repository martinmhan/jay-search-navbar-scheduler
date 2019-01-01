import React from 'react';
import axios from 'axios';
import style from '../css/Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: ['Alameda', 'Alhambra', 'Altadena', 'Anza', 'Arcadia', 'Bakersfield', 'Bellflower', 'Belmont', 'Big Sur', 'Calabasas', 'Canoga Park', 'Capistrano Beach', 'Carson', 'Cerritos', 'Commerse', 'Compton', 'Costa Mesa', 'Cupertino', 'Dana Point', 'Diamond Bar', 'Downey', 'Encino', 'Fairfax', 'Fremont', 'Fullerton', 'Gilroy', 'Glendora', 'Hawthorne', 'Hollywood', 'Humbolt', 'Irvine', 'Joshua Tree', 'La Canada', 'Laguna Beach', 'Lake Forest', 'Lake Tahoe', 'Malibu', 'Mendocino', 'Napa', 'Newport', 'Newport Beach', 'Oakland', 'Oxnard', 'Orange', 'Ojai', 'Palm Springs', 'Palo Alto', 'Pasadena', 'Playa del Rey', 'Pomona', 'Ramona', 'Rancho Dominguez', 'Redondo Beach', 'Rosemead', 'San Bruno', 'San Diego', 'Santa Fe Springs', 'Santa Monica', 'South Pasadena', 'Temecula', 'Topanga', 'Torrance', 'Tustin', 'Universal City', 'Van Nuys', 'Venice', 'Ventura', 'West Covina', 'West Hollywood', 'Westminister', 'Whittier', 'Woodland Hills', 'Yorba Linda', 'Yucca Valley'],
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
                        <div className={style.regionCityList}>
                            {this.state.metros.map(metro => <div className={style.singleRegionCityDiv}><a href onClick={this.handleSelection}> {metro} </a></div>)}
                        </div>
                    </div>
                    <div className={style.rightMidLocationNav}>
                        <div className={style.regionCityList}>
                            {this.state.cities.map(city => <div className={style.singleRegionCityDiv}><a href> {city.city} </a></div>)}
                        </div>
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