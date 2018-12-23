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
                <div id="appTopNav">
                    <button onClick={this.handleClickNav} >NavBRUHH</button>
                    {navClicked ? (<Nav />) : (<div></div>)}
                    <button onClick={this.handleClickSearch}>SEARCH4YOBITCH</button>
                    {searchClicked ? (<Search />) : (<div></div>)}
                </div>
                <div className="appContainer">
                    <div className="appHeaderPhoto">
                    </div>
                    <div className="appStickyPoint">
                        <div className="appReservation">
                            <div className="appReservationTop">
                                <h3 className="appReservationHeaderTop">Make Reservation</h3>
                            </div>
                            <div className="appReservationBody">
                                <div className="appReservationPartySize">
                                    <h4 className="appReservationHeader">Party Size</h4>
                                    <div className="partyCounter">
                                        <select name="selectPartyCount">
                                            <option value="1">1 person</option>
                                            <option value="2">2 person</option>
                                            <option value="3">3 person</option>
                                            <option value="4">4 person</option>
                                            <option value="5">5 person</option>
                                            <option value="6">6 person</option>
                                            <option value="7">7 person</option>
                                            <option value="8">8 person</option>
                                            <option value="9">9 person</option>
                                            <option value="10">10 person</option>
                                            <option value="11">11 person</option>
                                            <option value="12">12 person</option>
                                            <option value="13">13 person</option>
                                            <option value="14">14 person</option>
                                            <option value="15">15 person</option>
                                            <option value="16">16 person</option>
                                            <option value="17">17 person</option>
                                            <option value="18">18 person</option>
                                            <option value="19">19 person</option>
                                            <option value="20">20 person</option>
                                            <option value="21">Larger party</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="appReservationTimeAndDate">
                                    <div className="appReservationDate">
                                        <h4 className="appReservationHeader">Date</h4>
                                        <select>
                                            <option>INSERT CAL PLS</option>
                                        </select>
                                    </div>

                                    <div className="appReservationTime">
                                        <h4 className="appReservationHeader">Time</h4>
                                        <div className="timePicker">
                                            {/* <a className="selectTimePicker"></a> how to select default */}
                                            <select name="selectTime" aria-label="time">
                                                <option value="00:00">12:00 AM</option>
                                                <option value="00:30">12:30 AM</option>
                                                <option value="01:00">1:00 AM</option>
                                                <option value="01:30">1:30 AM</option>
                                                <option value="02:00">2:00 AM</option>
                                                <option value="02:30">2:30 AM</option>
                                                <option value="03:00">3:00 AM</option>
                                                <option value="03:30">3:30 AM</option>
                                                <option value="04:00">4:00 AM</option>
                                                <option value="04:30">4:30 AM</option>
                                                <option value="05:00">5:00 AM</option>
                                                <option value="05:30">5:30 AM</option>
                                                <option value="06:00">6:00 AM</option>
                                                <option value="06:30">6:30 AM</option>
                                                <option value="07:00">7:00 AM</option>
                                                <option value="07:30">7:30 AM</option>
                                                <option value="08:00">8:00 AM</option>
                                                <option value="08:30">8:30 AM</option>
                                                <option value="09:00">9:00 AM</option>
                                                <option value="09:30">9:30 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="10:30">10:30 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="11:30">11:30 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="12:30">12:30 PM</option>
                                                <option value="13:00">1:00 PM</option>
                                                <option value="13:30">1:30 PM</option>
                                                <option value="14:00">2:00 PM</option>
                                                <option value="14:30">2:30 PM</option>
                                                <option value="15:00">3:00 PM</option>
                                                <option value="15:30">3:30 PM</option>
                                                <option value="16:00">4:00 PM</option>
                                                <option value="16:30">4:30 PM</option>
                                                <option value="17:00">5:00 PM</option>
                                                <option value="17:30">5:30 PM</option>
                                                <option value="18:00">6:00 PM</option>
                                                <option value="18:30">6:30 PM</option>
                                                <option value="19:00">7:00 PM</option>
                                                <option value="19:30">7:30 PM</option>
                                                <option value="20:00">8:00 PM</option>
                                                <option value="20:30">8:30 PM</option>
                                                <option value="21:00">9:00 PM</option>
                                                <option value="21:30">9:30 PM</option>
                                                <option value="22:00">10:00 PM</option>
                                                <option value="22:30">10:30 PM</option>
                                                <option value="23:00">11:00 PM</option>
                                                <option value="23:30">11:30 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="appMovingNavBar">
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default App;