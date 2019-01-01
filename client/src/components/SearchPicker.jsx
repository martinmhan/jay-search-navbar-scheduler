import React from 'React';
import style from '../css/Search.css';
import DatePicker from './DatePicker.jsx';


const SearchPicker = (props) => {
    return (
        <div className={style.pickerContainer}>
            <div className={style.datePicker}>
                <div className={style.datePickerInput}></div>
                {/* <DatePicker /> */}
            </div>

            <div className={style.timePicker}>
                {/* <a className={style.selectTimePicker"></a> how to select default */}
                <select name="selectTime" aria-label="time">
                    <option className={style.pickerText} value="00:00">12:00 AM</option>
                    <option className={style.pickerText} value="00:30">12:30 AM</option>
                    <option className={style.pickerText} value="01:00">1:00 AM</option>
                    <option className={style.pickerText} value="01:30">1:30 AM</option>
                    <option className={style.pickerText} value="02:00">2:00 AM</option>
                    <option className={style.pickerText} value="02:30">2:30 AM</option>
                    <option className={style.pickerText} value="03:00">3:00 AM</option>
                    <option className={style.pickerText} value="03:30">3:30 AM</option>
                    <option className={style.pickerText} value="04:00">4:00 AM</option>
                    <option className={style.pickerText} value="04:30">4:30 AM</option>
                    <option className={style.pickerText} value="05:00">5:00 AM</option>
                    <option className={style.pickerText} value="05:30">5:30 AM</option>
                    <option className={style.pickerText} value="06:00">6:00 AM</option>
                    <option className={style.pickerText} value="06:30">6:30 AM</option>
                    <option className={style.pickerText} value="07:00">7:00 AM</option>
                    <option className={style.pickerText} value="07:30">7:30 AM</option>
                    <option className={style.pickerText} value="08:00">8:00 AM</option>
                    <option className={style.pickerText} value="08:30">8:30 AM</option>
                    <option className={style.pickerText} value="09:00">9:00 AM</option>
                    <option className={style.pickerText} value="09:30">9:30 AM</option>
                    <option className={style.pickerText} value="10:00">10:00 AM</option>
                    <option className={style.pickerText} value="10:30">10:30 AM</option>
                    <option className={style.pickerText} value="11:00">11:00 AM</option>
                    <option className={style.pickerText} value="11:30">11:30 AM</option>
                    <option className={style.pickerText} value="12:00">12:00 PM</option>
                    <option className={style.pickerText} value="12:30">12:30 PM</option>
                    <option className={style.pickerText} value="13:00">1:00 PM</option>
                    <option className={style.pickerText} value="13:30">1:30 PM</option>
                    <option className={style.pickerText} value="14:00">2:00 PM</option>
                    <option className={style.pickerText} value="14:30">2:30 PM</option>
                    <option className={style.pickerText} value="15:00">3:00 PM</option>
                    <option className={style.pickerText} value="15:30">3:30 PM</option>
                    <option className={style.pickerText} value="16:00">4:00 PM</option>
                    <option className={style.pickerText} value="16:30">4:30 PM</option>
                    <option className={style.pickerText} value="17:00">5:00 PM</option>
                    <option className={style.pickerText} value="17:30">5:30 PM</option>
                    <option className={style.pickerText} value="18:00">6:00 PM</option>
                    <option className={style.pickerText} value="18:30">6:30 PM</option>
                    <option className={style.pickerText} value="19:00">7:00 PM</option>
                    <option className={style.pickerText} value="19:30">7:30 PM</option>
                    <option className={style.pickerText} value="20:00">8:00 PM</option>
                    <option className={style.pickerText} value="20:30">8:30 PM</option>
                    <option className={style.pickerText} value="21:00">9:00 PM</option>
                    <option className={style.pickerText} value="21:30">9:30 PM</option>
                    <option className={style.pickerText} value="22:00">10:00 PM</option>
                    <option className={style.pickerText} value="22:30">10:30 PM</option>
                    <option className={style.pickerText} value="23:00">11:00 PM</option>
                    <option className={style.pickerText} value="23:30">11:30 PM</option>
                </select>
            </div>

            <div className={style.partyCounter}>
                <select name="selectPartyCount">
                    <option className={style.pickerText} value="1">1 person</option>
                    <option className={style.pickerText} value="2">2 person</option>
                    <option className={style.pickerText} value="3">3 person</option>
                    <option className={style.pickerText} value="4">4 person</option>
                    <option className={style.pickerText} value="5">5 person</option>
                    <option className={style.pickerText} value="6">6 person</option>
                    <option className={style.pickerText} value="7">7 person</option>
                    <option className={style.pickerText} value="8">8 person</option>
                    <option className={style.pickerText} value="9">9 person</option>
                    <option className={style.pickerText} value="10">10 person</option>
                    <option className={style.pickerText} value="11">11 person</option>
                    <option className={style.pickerText} value="12">12 person</option>
                    <option className={style.pickerText} value="13">13 person</option>
                    <option className={style.pickerText} value="14">14 person</option>
                    <option className={style.pickerText} value="15">15 person</option>
                    <option className={style.pickerText} value="16">16 person</option>
                    <option className={style.pickerText} value="17">17 person</option>
                    <option className={style.pickerText} value="18">18 person</option>
                    <option className={style.pickerText} value="19">19 person</option>
                    <option className={style.pickerText} value="20">20 person</option>
                    <option className={style.pickerText} value="21">Larger party</option>
                </select>
            </div>
        </div>
    )
}

export default SearchPicker;