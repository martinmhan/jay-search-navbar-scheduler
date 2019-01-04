import React from 'react';
import style from '../css/TopBar.css';

const TopPhoto = (props) => {
    return (
        <div className={style.topContainerS4}>
            <img className={style.appHeaderPhoto} src={"https://s3-us-west-1.amazonaws.com/table-it/alcohol-architecture-bar-260922.jpg"} />
        </div>
    )
}

export default TopPhoto;