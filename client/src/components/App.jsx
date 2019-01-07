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
            reservationCal: false
        }
        this.handleCloseAll = this.handleCloseAll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
    }

    handleClick(e) {
        let name = e.target.id;
        this.setState({
            [name]: !(this.state[name])
        })
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
    render() {
        return (
            <div className={style.appContainer} onClick={this.handleCloseAll}>
                <TopBar handleClick={this.handleClick} locationNav={this.state.locationNav} searchClicked={this.state.searchClicked} mobile={this.state.mobile} en={this.state.en} />
                <TopPhoto />
                <StickyContainer handleClick={this.handleClick} reservationCal = {this.state.reservationCal}/>
            </div>
        )
    }
}

export default App;