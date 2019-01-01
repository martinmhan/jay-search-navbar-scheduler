import React from 'react';
import axios from 'axios';
import style from '../css/Search.css';
// import SearchPicker from './SearchPicker.jsx';
import DatePicker from './DatePicker.jsx';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cityMatch: [],
            cuisineMatch: [],
            restaurantMatch: [],
            selectedDay: "Jan 4, 2019",
            datePicker: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleDaySelection = this.handleDaySelection.bind(this);
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
    handleClickSearch(e) {
        let name = e.target.id;
        console.log(name)
        this.setState({
            [name]: !this.state[name]
        })
    }
    handleDaySelection(day) {
        this.setState({
            selectedDay: day
        })
    }
    render() {
        let cityMatch = this.state.cityMatch;
        let cuisineMatch = this.state.cuisineMatch;
        let restaurantMatch = this.state.restaurantMatch;
        let datePicker = this.state.datePicker;
        return (
            <div>
                <div className={style.searchContainer}>
                    <div className={style.searchCloseButtonContainer}>
                        <button id="searchButton" onClick={this.props.handleClickTopBar} className={style.searchCloseButton}><i className={"material-icons" + ' ' + style.mobileOutsideComponents}>close</i></button>
                        {/* cant pass down the clickhandler here either */}
                    </div>
                    <div className={style.searchHeaderMessage}>
                        <h3>
                            <span className={style.largeText}>Find your table for any occasion</span>
                        </h3>
                    </div>
                    <div className={style.searchBottomComponents}>
                        {/* <SearchPicker handleClickSearch={this.handleClickSearch} selectedDay={this.state.selectedDay} /> */}
                        <div className={style.pickerContainer}>
                            <div className={style.datePicker}>
                                <button id="datePicker" className={style.datePickerInput} onClick={() => { this.handleClickSearch }}>{this.state.selectedDay}</button>
                            </div>
                            {/* cant pass down the function for onclick here */}
                            <div className={style.timePicker}>
                                {/* <a className={style.selectTimePicker"></a> how to select default */}
                                <div class={style.customSelectTime}> <i className={"material-icons" + ' ' + style.mobileOutsideComponents}>keyboard_arrow_down</i> 12
                                    <select>
                                        <option className={style.pickerText} value="00:00">12:00 AM</option>
                                        <option className={style.pickerText} value="00:30">12:30 AM</option>
                                        <option className={style.pickerText} value="01:00">1:00 AM</option>
                                        <option className={style.pickerText} value="01:30">1:30 AM</option>
                                        <option className={style.pickerText} value="02:00">2:00 AM</option>
                                        <option className={style.pickerText} value="02:30">2:30 AM</option>
                                        <option className={style.pickerText} value="03:00">3:00 AM</option>
                                        <option className={style.pickerText} value="03:30">3:30 AM</option>
                                        <option className={style.pickerText} value="04:00">4:00 AM</option>
                                        <option className={style.pickerText} value="04:30">4:30 AM</option>
                                        <option className={style.pickerText} value="05:00">5:00 AM</option>
                                        <option className={style.pickerText} value="05:30">5:30 AM</option>
                                        <option className={style.pickerText} value="06:00">6:00 AM</option>
                                        <option className={style.pickerText} value="06:30">6:30 AM</option>
                                        <option className={style.pickerText} value="07:00">7:00 AM</option>
                                        <option className={style.pickerText} value="07:30">7:30 AM</option>
                                        <option className={style.pickerText} value="08:00">8:00 AM</option>
                                        <option className={style.pickerText} value="08:30">8:30 AM</option>
                                        <option className={style.pickerText} value="09:00">9:00 AM</option>
                                        <option className={style.pickerText} value="09:30">9:30 AM</option>
                                        <option className={style.pickerText} value="10:00">10:00 AM</option>
                                        <option className={style.pickerText} value="10:30">10:30 AM</option>
                                        <option className={style.pickerText} value="11:00">11:00 AM</option>
                                        <option className={style.pickerText} value="11:30">11:30 AM</option>
                                        <option className={style.pickerText} value="12:00">12:00 PM</option>
                                        <option className={style.pickerText} value="12:30">12:30 PM</option>
                                        <option className={style.pickerText} value="13:00">1:00 PM</option>
                                        <option className={style.pickerText} value="13:30">1:30 PM</option>
                                        <option className={style.pickerText} value="14:00">2:00 PM</option>
                                        <option className={style.pickerText} value="14:30">2:30 PM</option>
                                        <option className={style.pickerText} value="15:00">3:00 PM</option>
                                        <option className={style.pickerText} value="15:30">3:30 PM</option>
                                        <option className={style.pickerText} value="16:00">4:00 PM</option>
                                        <option className={style.pickerText} value="16:30">4:30 PM</option>
                                        <option className={style.pickerText} value="17:00">5:00 PM</option>
                                        <option className={style.pickerText} value="17:30">5:30 PM</option>
                                        <option className={style.pickerText} value="18:00">6:00 PM</option>
                                        <option className={style.pickerText} value="18:30">6:30 PM</option>
                                        <option className={style.pickerText} value="19:00">7:00 PM</option>
                                        <option className={style.pickerText} value="19:30">7:30 PM</option>
                                        <option className={style.pickerText} value="20:00">8:00 PM</option>
                                        <option className={style.pickerText} value="20:30">8:30 PM</option>
                                        <option className={style.pickerText} value="21:00">9:00 PM</option>
                                        <option className={style.pickerText} value="21:30">9:30 PM</option>
                                        <option className={style.pickerText} value="22:00">10:00 PM</option>
                                        <option className={style.pickerText} value="22:30">10:30 PM</option>
                                        <option className={style.pickerText} value="23:00">11:00 PM</option>
                                        <option className={style.pickerText} value="23:30">11:30 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className={style.partyCounter}>
                                <select name="selectPartyCount">
                                    <option className={style.pickerText} value="1">1 person</option>
                                    <option className={style.pickerText} value="2">2 person</option>
                                    <option className={style.pickerText} value="3">3 person</option>
                                    <option className={style.pickerText} value="4">4 person</option>
                                    <option className={style.pickerText} value="5">5 person</option>
                                    <option className={style.pickerText} value="6">6 person</option>
                                    <option className={style.pickerText} value="7">7 person</option>
                                    <option className={style.pickerText} value="8">8 person</option>
                                    <option className={style.pickerText} value="9">9 person</option>
                                    <option className={style.pickerText} value="10">10 person</option>
                                    <option className={style.pickerText} value="11">11 person</option>
                                    <option className={style.pickerText} value="12">12 person</option>
                                    <option className={style.pickerText} value="13">13 person</option>
                                    <option className={style.pickerText} value="14">14 person</option>
                                    <option className={style.pickerText} value="15">15 person</option>
                                    <option className={style.pickerText} value="16">16 person</option>
                                    <option className={style.pickerText} value="17">17 person</option>
                                    <option className={style.pickerText} value="18">18 person</option>
                                    <option className={style.pickerText} value="19">19 person</option>
                                    <option className={style.pickerText} value="20">20 person</option>
                                    <option className={style.pickerText} value="21">Larger party</option>
                                </select>
                            </div>
                        </div>
                        {datePicker ? <DatePicker handleClickSearch={this.handleClickSearch} handleDaySelection={this.handleDaySelection} /> : <div></div>}
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