import React from 'react';
import axios from 'axios';
import style from '../css/Search.css';
import DatePickerSearch from './DatePickerSearch.jsx';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cityMatch: [],
            cuisineMatch: [],
            restaurantMatch: [],
            selectedDay: "Jan 4, 2019",
            selectedTime: "6:00 AM",
            datePickerSearch: false,

        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        // this.handleDaySelection = this.handleDaySelection.bind(this);
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
        console.log('here');
        console.log(e)
        let name = e.target.id;
        console.log(name)
        this.setState({
            [name]: !this.state[name]
        })
    }
    // handleDaySelection(day) {
    //     this.setState({
    //         selectedDay: day
    //     })
    // }
    handleSelect(e) {
        console.log(e.target.value)
        let value = e.target.value;
        let name = e.target.id;
        this.setState({
            [name]: value
        })
    }
    render() {
        let cityMatch = this.state.cityMatch;
        let cuisineMatch = this.state.cuisineMatch;
        let restaurantMatch = this.state.restaurantMatch;
        let datePickerSearch = this.state.datePickerSearch;
        console.log('handleClickSearch', this.handleClickSearch)
        return (
            <div>
                <div className={style.searchContainer}>
                    {datePickerSearch ? <DatePickerSearch handleClickSearch={this.handleClickSearch} handleDaySelection={this.handleDaySelection} /> : <div></div>}

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
                        <div className={style.pickerContainer}>
                            {/* <div className={style.datePicker}>
                            </div> */}
                            <button id="datePicker" onClick={this.handleClickSearch} className={style.datePickerInput}>{this.state.selectedDay}</button>
                            {/* cant pass down the function for onclick here */}
                            <div className={style.timePicker}>
                                <div class={style.customSelectTime}>
                                    <i className={"material-icons" + ' ' + style.mobileOutsideComponents}>access_time</i>
                                    <div className={style.currentSelectTime}>{this.state.selectedTime}</div>
                                    <i className={"material-icons" + ' ' + style.mobileOutsideComponents}>keyboard_arrow_down</i>
                                </div>
                                <select id="selectedTime" onChange={this.handleSelect}>
                                    <option className={style.pickerText} value="12:00 AM">12:00 AM</option>
                                    <option className={style.pickerText} value="02:30 AM">12:30 AM</option>
                                    <option className={style.pickerText} value="1:00 AM">1:00 AM</option>
                                    <option className={style.pickerText} value="1:30 AM">1:30 AM</option>
                                    <option className={style.pickerText} value="2:00 AM">2:00 AM</option>
                                    <option className={style.pickerText} value="2:30 AM">2:30 AM</option>
                                    <option className={style.pickerText} value="3:00 AM">3:00 AM</option>
                                    <option className={style.pickerText} value="3:30 AM">3:30 AM</option>
                                    <option className={style.pickerText} value="4:00 AM">4:00 AM</option>
                                    <option className={style.pickerText} value="4:30 AM">4:30 AM</option>
                                    <option className={style.pickerText} value="5:00 AM">5:00 AM</option>
                                    <option className={style.pickerText} value="5:30 AM">5:30 AM</option>
                                    <option className={style.pickerText} value="6:00 AM">6:00 AM</option>
                                    <option className={style.pickerText} value="6:30 AM">6:30 AM</option>
                                    <option className={style.pickerText} value="7:00 AM">7:00 AM</option>
                                    <option className={style.pickerText} value="7:30 AM">7:30 AM</option>
                                    <option className={style.pickerText} value="8:00 AM">8:00 AM</option>
                                    <option className={style.pickerText} value="8:30 AM">8:30 AM</option>
                                    <option className={style.pickerText} value="9:00 AM">9:00 AM</option>
                                    <option className={style.pickerText} value="9:30 AM">9:30 AM</option>
                                    <option className={style.pickerText} value="10:00 AM">10:00 AM</option>
                                    <option className={style.pickerText} value="10:30 AM">10:30 AM</option>
                                    <option className={style.pickerText} value="11:00 AM">11:00 AM</option>
                                    <option className={style.pickerText} value="11:30 AM">11:30 AM</option>
                                    <option className={style.pickerText} value="12:00 PM">12:00 PM</option>
                                    <option className={style.pickerText} value="12:30 PM">12:30 PM</option>
                                    <option className={style.pickerText} value="1:00 PM">1:00 PM</option>
                                    <option className={style.pickerText} value="1:30 PM">1:30 PM</option>
                                    <option className={style.pickerText} value="2:00 PM">2:00 PM</option>
                                    <option className={style.pickerText} value="2:30 PM">2:30 PM</option>
                                    <option className={style.pickerText} value="3:00 PM">3:00 PM</option>
                                    <option className={style.pickerText} value="3:30 PM">3:30 PM</option>
                                    <option className={style.pickerText} value="4:00 PM">4:00 PM</option>
                                    <option className={style.pickerText} value="4:30 PM">4:30 PM</option>
                                    <option className={style.pickerText} value="5:00 PM">5:00 PM</option>
                                    <option className={style.pickerText} value="5:30 PM">5:30 PM</option>
                                    <option className={style.pickerText} value="6:00 PM">6:00 PM</option>
                                    <option className={style.pickerText} value="6:30 PM">6:30 PM</option>
                                    <option className={style.pickerText} value="7:00 PM">7:00 PM</option>
                                    <option className={style.pickerText} value="7:30 PM">7:30 PM</option>
                                    <option className={style.pickerText} value="8:00 PM">8:00 PM</option>
                                    <option className={style.pickerText} value="8:30 PM">8:30 PM</option>
                                    <option className={style.pickerText} value="9:00 PM">9:00 PM</option>
                                    <option className={style.pickerText} value="9:30 PM">9:30 PM</option>
                                    <option className={style.pickerText} value="20:00 PM">10:00 PM</option>
                                    <option className={style.pickerText} value="20:30 PM">10:30 PM</option>
                                    <option className={style.pickerText} value="21:00 PM">11:00 PM</option>
                                    <option className={style.pickerText} value="21:30 PM">11:30 PM</option>
                                </select>
                            </div>

                            {/* <div className={style.partyCounter}> */}
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
                            {/* </div> */}
                        </div>
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
            </div>
        )
    }
}

export default Search;