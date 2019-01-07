import React from 'react';
import style from '../css/TopBar.css';

const TopPhoto = (props) => {
    return (
        <div className={style.topContainerS4}>
            <img className={style.appHeaderPhoto} src={"https://s3-us-west-1.amazonaws.com/helloitsjson/25352483-2-2.jpg"} />
        </div>
    )
}

export default TopPhoto;