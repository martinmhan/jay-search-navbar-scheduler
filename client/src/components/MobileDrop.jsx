import React from 'React';
import style from '../css/TopBar.css';

const MobileDrop = (props) => {
    return (
        <div className={style.mobileContainer}>
            <div className="mobileComponents">iOS App</div>
            <div className="mobileComponents">Android App</div>
            <div className="mobileComponents">Windows Phone App</div>
            <div className="mobileComponents">Windows 8 App</div>
        </div>
    )
}

export default MobileDrop;