import React from 'React';
import Search from './Search.jsx';
import Nav from './Nav.jsx';
import style from '../css/TopBar.css';
import MobileDrop from './MobileDrop.jsx';
import EnDrop from './EnDrop.jsx';


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cities: [],
            locationNav: false,
            searchButton: false,
            mobile: false,
            en: false
        }
        this.handleClickTopBar = this.handleClickTopBar.bind(this);
    }
    handleClickTopBar(e) {
        let name = e.target.id;
        this.setState({
            [name]: !(this.state[name])
        })
    }

    render() {
        let navClicked = this.state.locationNav;
        let searchClicked = this.state.searchButton;
        let mobileClicked = this.state.mobile;
        let enClicked = this.state.en;
        return (
            <div className={style.topBar}>
                <div className={style.topContainerS1}>
                    {searchClicked ? (<Search handleClickTopBar={this.handleClickTopBar} />) : (<div></div>)}
                    <div>
                        {mobileClicked ? <MobileDrop /> : <div></div>}
                    </div>
                    <div className={style.topContainerS1Right}>
                        <div className={style.topContainerS1RightS1}>
                            <a href className={style.smallLinksTop}>For Restauranteurs</a>
                        </div>
                        <div className={style.topContainerS1RightS2}>
                            <a href id="mobile" onClick={this.handleClickTopBar} className={style.smallLinksTop}>Mobile</a>
                            <i className={"material-icons" + ' ' + style.topBarLogos}>keyboard_arrow_down</i>
                        </div>
                        <div className={style.topContainerS1RightS3}>
                            <a href className={style.smallLinksTop}>Help</a>
                        </div>
                        <div className={style.topContainerS1RightS4}>
                            <i className={"material-icons" + ' ' + style.topBarLogos}>language</i>
                            <a href id="en" onClick={this.handleClickTopBar} className={style.smallLinksTop}>EN</a>
                            {enClicked ? <EnDrop /> : <div></div>}
                            <i className={"material-icons" + ' ' + style.topBarLogos}>keyboard_arrow_down</i>
                        </div>
                    </div>
                </div>

                {/* Refactor onclick funtion here */}
                <div className={style.topContainerS2}>
                    {navClicked ? (<Nav />) : (<div></div>)}
                    <div className={style.topContainerS2S1}>
                        <img className={style.openTableLogo} src={"https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_logo.png"} />
                        <div className={style.openTableLogoText}>TableIt®</div>
                    </div>
                    <button className={style.topContainerS2S2} id="locationNav" onClick={this.handleClickTopBar}>
                        <div id="locationNav" className={style.locationNav}>
                            <i id="locationNav" className={"material-icons" + ' ' + style.location_onNavHeaderIcon}>location_on</i>
                            <div id="locationNav" className={style.locationNavHeader + ' ' + style.smallLinks}>Los Angeles</div>
                            <i id="locationNav" className={"material-icons" + ' ' + style.locationNavHeaderIcon}>keyboard_arrow_right</i>
                            <div id="locationNav" className={style.locationNavHeader + ' ' + style.smallLinks}>West Hollywood / Beverly Hills / Mid-Wilshire</div>
                            <i id="locationNav" className={"material-icons" + ' ' + style.locationNavHeaderIcon + ' ' + style.smallLinks}>keyboard_arrow_down</i>
                        </div>
                    </button>
                    <div className={style.topContainerS2S3}>
                        <div className={style.S2S3buttonContainer}>
                            <button className={style.signUpButton}>Sign Up</button>
                            <a href className={style.signInButton}>Sign In</a>
                            <i id="searchButton" onClick={this.handleClickTopBar} className={"material-icons" + ' ' + style.locationNavHeaderIcon + ' ' + style.searchHeaderIcon}>search</i>
                        </div>
                    </div>
                </div>

                <div className={style.topContainerS3}>
                    <div className={style.topContainerS3SContainer}>
                        <div className={style.topContainerS3S1}>
                            <a href className={style.smallLinks}>Home</a>
                        </div>
                        <div className={style.topContainerS3S2}>
                            <div className={style.smallText}>United States</div>
                        </div>
                        <div className={style.topContainerS3S3}>
                            <a href className={style.smallLinks}>Los Angeles</a>
                        </div>
                        <div className={style.topContainerS3S4}>
                            <a href className={style.smallLinks}>West Hollywood / Beverly Hills / Mid-Wilshire</a>
                        </div>
                        <div className={style.topContainerS3S5}>
                            <div className={style.smallText}>West Hollywood</div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default TopBar;