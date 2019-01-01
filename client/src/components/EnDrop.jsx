import React from 'React';
import style from '../css/TopBar.css'

const En = (props) => {
    return (
        <div className={style.enContainer}>
            <div className={style.enComponents}>Deutsch</div>
            <div className={style.enComponents + ' ' + style.enComponentsSelected}>English</div>
            <div className={style.enComponents}>Español</div>
            <div className={style.enComponents}>Français</div>
            <div className={style.enComponents}>Italiano</div>
            <div className={style.enComponents}>Nederlands</div>
            <div className={style.enComponents}>日本語</div>
        </div>
    )
}

export default En;