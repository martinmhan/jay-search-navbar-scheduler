import React from 'react';
import axios from 'axios';
import style from '../css/Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: ['Alameda', 'Alhambra', 'Altadena', 'Anza', 'Arcadia', 'Bakersfield', 'Bellflower', 'Belmont', 'Big Sur', 'Calabasas', 'Canoga Park', 'Capistrano Beach', 'Carson', 'Cerritos', 'Commerse', 'Compton', 'Costa Mesa', 'Cupertino', 'Dana Point', 'Diamond Bar', 'Downey', 'Encino', 'Fairfax', 'Fremont', 'Fullerton', 'Gilroy', 'Glendora', 'Hawthorne', 'Hollywood', 'Humbolt', 'Irvine', 'Joshua Tree', 'La Canada', 'Laguna Beach', 'Lake Forest', 'Lake Tahoe', 'Malibu', 'Mendocino', 'Napa', 'Newport', 'Newport Beach', 'Oakland', 'Oxnard', 'Orange', 'Ojai', 'Palm Springs', 'Palo Alto', 'Pasadena', 'Playa del Rey', 'Pomona', 'Ramona', 'Rancho Dominguez', 'Redondo Beach', 'Rosemead', 'San Bruno', 'San Diego', 'Santa Fe Springs', 'Santa Monica', 'South Pasadena', 'Temecula', 'Topanga', 'Torrance', 'Tustin', 'Universal City', 'Van Nuys', 'Venice', 'Ventura', 'West Covina', 'West Hollywood', 'Westminister', 'Whittier', 'Woodland Hills', 'Yorba Linda', 'Yucca Valley'],
            metros: ['Atlanta_Georgia', 'Boston_New_England', 'Chicago_Illinois', 'Dallas', 'Denver_Colorado', 'Houston', 'Las_Vegas', 'Los_Angeles', 'Miami_South_Florida', 'New_Orleans_Louisiana', 'New_York_Area', 'Orange_County', 'San_Francisco_Area', 'San_Diego', 'Seattle_Area'],
            currentMetro: 'Los_Angeles',
            currentCity: 2,
            random: 20
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.getCities = this.getCities.bind(this);
    }
    componentDidMount() {
        this.getCities();
    }
    handleSelection(e) {
        let selectedMetro = e.target.innerHTML;
        let context = this;
        this.setState({
            currentMetro: selectedMetro
        }, () => {
            context.getCities();
        })
    }

    getCities() {
        let metro = this.state.currentMetro;
        let regexMetro = metro.replace(/ /g, '_');
        axios.get(`http://3.84.195.96:9000/api/nav/${regexMetro}`)
            .then(data => {
                let result = data.data;
                this.setState({
                    cities: result
                })
            })
            .catch(err => console.log(err))
    }
    generateRandomNum() {
        const min = 1;
        const max = 4000;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: this.state.random + rand });
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
                        <div id="12kjh32lkj3" className={style.regionCityList}>
                            {this.state.metros.map((metro, i) => <a id="kasdj887889"  className={metro === this.state.currentMetro ? (style.selectedSingleRegionCity) : (style.singleRegionCityDiv)} onClick={this.handleSelection}>
                                <div title={i} id="kasdj887889" className={style.metroNameRender}>{metro.replace(/_/g, " ")}</div>
                                <i className={"material-icons" + ' ' + style.arrowForwardLogo}>arrow_forward_ios</i>
                            </a>)}
                        </div>
                    </div>
                    <div className={style.rightMidLocationNav}>
                        <div id="312kjldffk3" className={style.regionCityList}>
                            {this.state.cities.map((city, index) => <a id="kasdj887889" className={index === this.state.currentCity ? (style.selectedSingleCity) : (style.singleRegionCityDiv)}>
                                <div className={style.cityNameRender}>{city.city}</div> <div className={style.cityNameQuantity}>{Math.floor(Math.random() * (1000 - 1))}</div>
                            </a>)}
                        </div>
                    </div>
                </div>
                <div className={style.bottomLocationNav}>
                    <div className={style.bottomLocationNavText}>Full List of Metros</div>
                </div>
            </div>
        )
    }
}
export default Nav;