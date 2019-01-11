import React from 'react';
import style from '../css/TopBar.css';

const MobileDrop = (props) => {
    return (
        <div className={style.mobileContainer}>
            <div className={style.mobileComponents}>iOS App</div>
            <div className={style.mobileComponents}>Android App</div>
            <div className={style.mobileComponents}>Windows Phone App</div>
            <div className={style.mobileComponents}>Windows 8 App</div>
        </div>
    )
}

export default MobileDrop;