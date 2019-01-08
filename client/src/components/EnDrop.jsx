import React from 'React';
import style from '../css/TopBar.css'

const En = (props) => {
    return (
        <div className={style.enContainer}>
            <div className={style.enComponents}><div className={style.languageName}>Deutsch</div></div>
            <div className={style.enComponents + ' ' + style.enComponentsSelected}><div className={style.languageName}>English</div></div>
            <div className={style.enComponents}><div className={style.languageName}>Español</div></div>
            <div className={style.enComponents}><div className={style.languageName}>Français</div></div>
            <div className={style.enComponents}><div className={style.languageName}>Italiano</div></div>
            <div className={style.enComponents}><div className={style.languageName}>Nederlands</div></div>
            <div className={style.enComponents}><div className={style.languageName}>日本語</div></div>
        </div>
    )
}

export default En;