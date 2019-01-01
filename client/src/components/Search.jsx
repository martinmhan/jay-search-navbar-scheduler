import React from 'react';
import axios from 'axios';
import style from '../css/Search.css';
import SearchPicker from './SearchPicker.jsx';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cityMatch: [],
            cuisineMatch: [],
            restaurantMatch: []
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        this.setState({
            text: e.target.value
        }, () => {
            if (this.state.text.length > 1) {
                let searched = this.state.text;
                axios.get(`/api/search/${searched}`)
                    .then(data => {
                        let result = data.data;
                        this.setState({
                            cityMatch: result.cities.slice(0, 5),
                            cuisineMatch: result.cuisines.slice(0, 5),
                            restaurantMatch: result.restaurants.slice(0, 5)
                        })
                    })
                    .catch(err => console.log(err))
            } else {
                this.setState({
                    cityMatch: [],
                    cuisineMatch: [],
                    restaurantMatch: []
                })
            }
        })
    }
    render() {
        let cityMatch = this.state.cityMatch;
        let cuisineMatch = this.state.cuisineMatch;
        let restaurantMatch = this.state.restaurantMatch;
        return (
            <div>
                <div className={style.searchContainer}>
                    <div className={style.searchHeaderMessage}>
                        <h3>
                            <span className={style.largeText}>Find your table for any occasion</span>
                        </h3>
                    </div>
                    <div className={style.searchBottomComponents}>
                        <SearchPicker />
                        <div className={style.searchBar}>
                            <input className={style.searchInput} onChange={this.handleInput}></input>
                        </div>

                        <div className={style.searchFindTableButtonContainer}>
                            <button className={style.searchFindTableButton}>Find a Table</button>
                        </div>

                        <div className={style.searchResults}>
                            <header className={style.searchHeader}>search: "{this.state.text}"</header>
                            {cityMatch.length !== 0 ? <div className={style.locationResults}>
                                <div className={style.searchCategoryText}>Locations</div>
                                <ul>
                                    {this.state.cityMatch.map(locaMatch => <li><a href className={style.searchResultText}>{locaMatch.city}</a></li>)}
                                </ul>
                            </div> : <div></div>}
                            {cuisineMatch.length !== 0 ? <div className={style.cuisinesResults}>
                                <div className={style.searchCategoryText}>Cuisines</div>
                                <ul>
                                    {this.state.cuisineMatch.map(cuisMatch => <li><a href className={style.searchResultText}>{cuisMatch.cuisineName}</a></li>)}
                                </ul>
                            </div> : <div></div>}
                            {restaurantMatch.length !== 0 ? <div className={style.restaurantResults}>
                                <div className={style.searchCategoryText}>Restaurants</div>
                                <ul>
                                    {this.state.restaurantMatch.map(restMatch => <li><a href class="font searchResultText">{restMatch.restaurantName}</a></li>)}
                                </ul>
                            </div> : <div></div>}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Search;