import React from 'react';
import TopBar from './TopBar.jsx';
import TopPhoto from './TopPhoto.jsx';
import StickyContainer from './StickyContainer.jsx';
import style from '../css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationNav: false,
            searchClicked: false,
            mobile: false,
            en: false,
            reservationCal: false,
            current: ''
        }
        this.handleCloseAll = this.handleCloseAll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
    }

    handleClick(e) {
        let name = e.target.id;
        this.setState({
            [name]: !(this.state[name]),
        })
        if (name !== "locationNav"){
            this.setState({
                locationNav: false
            })
        }
        if (name !== "searchClicked"){
            this.setState({
                searchClicked: false
            })
        } 
        if (name !== "mobile") {
            this.setState({
                mobile: false
            })
        }
        if (name !== "en"){
            this.setState({
                en: false
            })
        }
        if (name !== "reservationCal") {
            this.setState({
                reservationCal: false
            })
        }
        
    }
    handleCloseAll(e) {
        let name = e.target.id;
        if (name === "") {
            this.setState({
                locationNav: false,
                searchClicked: false,
                mobile: false,
                en: false,
                reservationCal: false
            })
        }
    }
    // handleCloseAll(e) {
    //     let name = e.target.id;
    //     if (name === ""){
    //         if (this.state.current !== locationNav){
    //             this.setState({
    //                 locationNav: false
    //             })
    //         }
    //         if (this.state.current !== searchClicked){
    //             this.setState({
    //                 searchClicked: false
    //             })
    //         } 
    //         if (this.state.current !== mobile) {
    //             this.setState({
    //                 mobile: false
    //             })
    //         }
    //         if (this.state.current !== en){
    //             this.setState({
    //                 en: false
    //             })
    //         }
    //         if (this.state.current !== reservationCal) {
    //             this.setState({
    //                 reservationCal: false
    //             })
    //         }
    //     }
    // }
    render() {
        return (
            <div className={style.appContainer} onClick={this.handleCloseAll}>
                <TopBar handleClick={this.handleClick} handleCloseAll = {this.handleCloseAll} locationNav={this.state.locationNav} searchClicked={this.state.searchClicked} mobile={this.state.mobile} en={this.state.en} />
                <TopPhoto />
                <StickyContainer handleClick={this.handleClick} handleCloseAll = {this.handleCloseAll} reservationCal = {this.state.reservationCal}/>
            </div>
        )
    }
}

export default App;