import React from 'react';
import style from '../css/TopBar.css';

const TopPhoto = (props) => {
    return (
        <div className={style.topContainerS4}>
            {/* <div className={style.appHeaderPhoto}> */}
            <img className={style.appHeaderPhoto} src={"https://s3-us-west-1.amazonaws.com/table-it/Blue-Ribbon-5--Anthony-Mair-for-Maison.jpg"} />
            {/* </div> */}
        </div>
    )
}

export default TopPhoto;