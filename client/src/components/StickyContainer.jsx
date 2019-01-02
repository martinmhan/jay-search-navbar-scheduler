import React from 'react';
import style from '../css/StickyContainer.css';
import DatePickerReservation from './DatePickerReservation.jsx';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class StickyContainer extends React.Component { // Hover buggy go back and check 
    constructor(props) {
        super(props);
        this.state = {
            overview: false,
            photos: false,
            menu: false,
            specials: false,
            reviews: false,
            twitter: false,
            reservationCal: false
        }
        this.handleSetActive = this.handleSetActive.bind(this);
        this.handleSetInactive = this.handleSetInactive.bind(this);
        this.reservationButtonHandler = this.reservationButtonHandler.bind(this);
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
        });
        Events.scrollEvent.register('end', function (to, element) {
        });
        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    handleSetActive(to) {
        this.setState({
            [to]: true
        })
    }
    handleSetInactive(to) {
        this.setState({
            [to]: !this.state[to]
        })
    }

    reservationButtonHandler() {
        this.setState({
            reservationCal: !this.state.reservationCal
        })
    }

    render() {
        return (
            <div className={style.containerSticky}>
                <div className={style.containerContent}>
                    <div className={style.content}>
                        <div id="overview" name="overview" className={style.testDummyText}>
                            TESTING
                        </div>
                        <div id="photos">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vel quae neque non veniam, natus eius pariatur odit, sed consequatur recusandae blanditiis minus eos laborum deleniti repellat numquam reiciendis ullam.
                        </div>
                        <div id="menu" className={style.testDummyPara}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consectetur, voluptates quis est, iste impedit sequi perspiciatis beatae mollitia quasi sit ratione saepe repellendus excepturi quas, soluta eaque dolorem! Dolorum, veritatis dolores, eos quo inventore suscipit tempora explicabo debitis quae recusandae itaque est voluptates veniam, nostrum dolor! Assumenda, quod dolor!
                        </div>
                        <div id="specials" className={style.testDummyPara}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id debitis non tenetur laboriosam delectus velit voluptatibus quasi nobis, culpa illo eos quas ipsa quae enim neque exercitationem nisi consequatur?
                        </div>
                        <div id="reviews" className={style.testDummyPara}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit, laboriosam pariatur veniam dolorum laudantium animi mollitia reiciendis impedit amet eaque nihil odio quo magni, iusto distinctio in corporis aperiam rerum nostrum fugit? Qui, assumenda est doloremque voluptatem impedit ad.
                        </div>
                        <div id="twitter" className={style.testDummyPara}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nulla dignissimos doloremque cum eaque rerum? Veniam, nostrum magni tempore tempora quos tenetur commodi deserunt! Quo veniam earum sapiente accusamus et?
                        </div>

                    </div>
                </div>
                <div className={style.containerStickyComponents}>
                    <div className={style.appMovingNavBarContainer}>
                        <div className={style.appMovingNavBar}>
                            <ul id="movingNavBar" className={style.appMovingNavBarList}>
                                <li id="overview" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="overview" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.overview === true ? style.active : ''}>Overview</Link>
                                </li>
                                <li id="photos" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="photos" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.photos === true ? style.active : ''}>Photos</Link>
                                </li>
                                <li id="menu" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="menu" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.menu === true ? style.active : ''}>Menu</Link>
                                </li>
                                <li id="specials" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="specials" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.specials === true ? style.active : ''}>Specials</Link>
                                </li>
                                <li id="reviews" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.reviews === true ? style.active : ''}>Reviews</Link>
                                </li>
                                <li id="twitter" className={style.appMovingNavBarListHeader}>
                                    <Link activeClass="active" to="twitter" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
                                        onSetInactive={this.handleSetInactive} className={this.state.twitter === true ? style.active : ''}>Twitter</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.appReservationContainer}>
                        <div className={style.appReservation}>
                            <div className={style.reservationCal}>
                                {this.state.reservationCal === true ? <DatePickerReservation /> : <div></div>}
                            </div>
                            <div className={style.appReservationTop}>
                                <h3 className={style.appReservationHeaderTop}>Make Reservation</h3>
                            </div>
                            <div className={style.appReservationPartySize}>
                                <h4 className={style.appReservationHeader}>Party Size</h4>
                                <div className={style.partyCounter}>
                                    <select className="selectPartyCount">
                                        <option className={style.optionValue} value="1">1 person</option>
                                        <option className={style.optionValue} value="2">2 person</option>
                                        <option className={style.optionValue} value="3">3 person</option>
                                        <option className={style.optionValue} value="4">4 person</option>
                                        <option className={style.optionValue} value="5">5 person</option>
                                        <option className={style.optionValue} value="6">6 person</option>
                                        <option className={style.optionValue} value="7">7 person</option>
                                        <option className={style.optionValue} value="8">8 person</option>
                                        <option className={style.optionValue} value="9">9 person</option>
                                        <option className={style.optionValue} value="10">10 person</option>
                                        <option className={style.optionValue} value="11">11 person</option>
                                        <option className={style.optionValue} value="12">12 person</option>
                                        <option className={style.optionValue} value="13">13 person</option>
                                        <option className={style.optionValue} value="14">14 person</option>
                                        <option className={style.optionValue} value="15">15 person</option>
                                        <option className={style.optionValue} value="16">16 person</option>
                                        <option className={style.optionValue} value="17">17 person</option>
                                        <option className={style.optionValue} value="18">18 person</option>
                                        <option className={style.optionValue} value="19">19 person</option>
                                        <option className={style.optionValue} value="20">20 person</option>
                                        <option className={style.optionValue} value="21">Larger party</option>
                                    </select>
                                </div>
                            </div>

                            <div className={style.appReservationTimeAndDate}>
                                <div className={style.appReservationDate}>
                                    <h4 className={style.appReservationHeader}>Date</h4>
                                    <a href className={style.appReservationButton} onClick={this.reservationButtonHandler}>ReservationButton</a>
                                </div>
                                <div className={style.appReservationTime}>
                                    <h4 className={style.appReservationHeader}>Time</h4>
                                    <div className={style.timePicker}>
                                        <select className="selectTime" aria-label="time">
                                            <option className={style.optionValue} value="00:00">12:00 AM</option>
                                            <option className={style.optionValue} value="00:30">12:30 AM</option>
                                            <option className={style.optionValue} value="01:00">1:00 AM</option>
                                            <option className={style.optionValue} value="01:30">1:30 AM</option>
                                            <option className={style.optionValue} value="02:00">2:00 AM</option>
                                            <option className={style.optionValue} value="02:30">2:30 AM</option>
                                            <option className={style.optionValue} value="03:00">3:00 AM</option>
                                            <option className={style.optionValue} value="03:30">3:30 AM</option>
                                            <option className={style.optionValue} value="04:00">4:00 AM</option>
                                            <option className={style.optionValue} value="04:30">4:30 AM</option>
                                            <option className={style.optionValue} value="05:00">5:00 AM</option>
                                            <option className={style.optionValue} value="05:30">5:30 AM</option>
                                            <option className={style.optionValue} value="06:00">6:00 AM</option>
                                            <option className={style.optionValue} value="06:30">6:30 AM</option>
                                            <option className={style.optionValue} value="07:00">7:00 AM</option>
                                            <option className={style.optionValue} value="07:30">7:30 AM</option>
                                            <option className={style.optionValue} value="08:00">8:00 AM</option>
                                            <option className={style.optionValue} value="08:30">8:30 AM</option>
                                            <option className={style.optionValue} value="09:00">9:00 AM</option>
                                            <option className={style.optionValue} value="09:30">9:30 AM</option>
                                            <option className={style.optionValue} value="10:00">10:00 AM</option>
                                            <option className={style.optionValue} value="10:30">10:30 AM</option>
                                            <option className={style.optionValue} value="11:00">11:00 AM</option>
                                            <option className={style.optionValue} value="11:30">11:30 AM</option>
                                            <option className={style.optionValue} value="12:00">12:00 PM</option>
                                            <option className={style.optionValue} value="12:30">12:30 PM</option>
                                            <option className={style.optionValue} value="13:00">1:00 PM</option>
                                            <option className={style.optionValue} value="13:30">1:30 PM</option>
                                            <option className={style.optionValue} value="14:00">2:00 PM</option>
                                            <option className={style.optionValue} value="14:30">2:30 PM</option>
                                            <option className={style.optionValue} value="15:00">3:00 PM</option>
                                            <option className={style.optionValue} value="15:30">3:30 PM</option>
                                            <option className={style.optionValue} value="16:00">4:00 PM</option>
                                            <option className={style.optionValue} value="16:30">4:30 PM</option>
                                            <option className={style.optionValue} value="17:00">5:00 PM</option>
                                            <option className={style.optionValue} value="17:30">5:30 PM</option>
                                            <option className={style.optionValue} value="18:00">6:00 PM</option>
                                            <option className={style.optionValue} value="18:30">6:30 PM</option>
                                            <option className={style.optionValue} value="19:00">7:00 PM</option>
                                            <option className={style.optionValue} value="19:30">7:30 PM</option>
                                            <option className={style.optionValue} value="20:00">8:00 PM</option>
                                            <option className={style.optionValue} value="20:30">8:30 PM</option>
                                            <option className={style.optionValue} value="21:00">9:00 PM</option>
                                            <option className={style.optionValue} value="21:30">9:30 PM</option>
                                            <option className={style.optionValue} value="22:00">10:00 PM</option>
                                            <option className={style.optionValue} value="22:30">10:30 PM</option>
                                            <option className={style.optionValue} value="23:00">11:00 PM</option>
                                            <option className={style.optionValue} value="23:30">11:30 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={style.appReservationButtonContainer}>
                                <div className={style.appReservationButton}>
                                    <button>Find a Table</button>
                                </div>
                            </div>
                            <div className={style.appReservationBookingContainer}>
                                <div className={style.appReservationBookingLogo}>Logo here</div>
                                <div className={style.appReservationBookingText}>Booked 9 times today</div>
                            </div>
                        </div>
                        <div className={style.appReservationSaveButtonContainer}>
                            <div className={style.appReservationSaveButton}>
                                <div>Button Logo</div>
                                <button>Save this Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StickyContainer;