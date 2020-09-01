import React, { useState } from 'react';
import './DatePicker.scss';
import Calendar from '../../Components/Calendar/Calendar';
import TimePicker from '../../Components/TimePicker/TimePicker';

const ManualDatePicker : React.FC = () => {
    const [timepicker,setTimePicker] = useState(false);
    const [selectedDate,setDate] = useState({value:'',flag:false});
    const [selectedTime,setTime] = useState({value:'',flag:false});
    const [selectedTimeZone,setTimeZone] = useState('Time Zone');

    return (
        <div className="manualdatepicker">
            <div className="menu-items"><span role="img"><svg width="24" height="24" viewBox="0 0 24 24" className="scheduler-suggestions-item-icon--today" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)" font-weight="500"><tspan x="8" y="15" text-anchor="middle">26</tspan></text></g></svg></span>Today</div>
            <div className="menu-items"><span role="img"><svg width="24" height="24" viewBox="0 0 24 24" className="scheduler-suggestions-item-icon--tomorrow" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="nonzero"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" opacity=".1"></path><path d="M9.704 17.543a.5.5 0 0 1 .27.654l-.956 2.31a.5.5 0 0 1-.924-.383l.957-2.31a.5.5 0 0 1 .653-.27zm5.245.27l.957 2.31a.5.5 0 0 1-.924.383l-.956-2.31a.5.5 0 0 1 .923-.382zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-5.543 6.796a.5.5 0 0 1-.27.653l-2.31.957a.5.5 0 0 1-.383-.924l2.31-.956a.5.5 0 0 1 .653.27zm11.74-.27l2.31.956a.5.5 0 0 1-.383.924l-2.31-.957a.5.5 0 0 1 .383-.923zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-8.124-.406l2.31.957a.5.5 0 0 1-.383.923l-2.31-.956a.5.5 0 0 1 .383-.924zm16.9.27a.5.5 0 0 1-.27.654l-2.31.956a.5.5 0 0 1-.382-.923l2.31-.957a.5.5 0 0 1 .653.27zM9.019 3.495l.956 2.31a.5.5 0 0 1-.923.382l-.957-2.31a.5.5 0 1 1 .924-.382zm6.617-.27a.5.5 0 0 1 .271.652l-.957 2.31a.5.5 0 0 1-.923-.383l.956-2.31a.5.5 0 0 1 .653-.27z"></path></g></svg></span>Tomorrow</div>
            <div className="menu-items"><span role="img"><svg width="24" height="24" viewBox="0 0 24 24" className="scheduler-suggestions-item-icon--next-week" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fill-rule="nonzero" d="M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-2.109 8.188l.007.01-.004-.005-.003-.005zM17 8a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1h10zm-1 5.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-2.511 2.512a.5.5 0 0 1-.765-.638l.057-.07L14.292 14H8.5a.5.5 0 0 1-.492-.41L8 13.5a.5.5 0 0 1 .41-.492L8.5 13h5.792l-1.646-1.646a.5.5 0 0 1 .638-.765l.07.057 2.511 2.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"></path></g></svg></span>Next Week</div>
            <div className="menu-items"><span role="img"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="nonzero" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path></svg></span>No Date</div>
            <Calendar
                selectedDate = {selectedDate}
                changeDate = {(val:string,flag:boolean)=>setDate({value:val,flag:flag})}
            ></Calendar>
            {
                timepicker?
                    <TimePicker 
                        close = {()=>setTimePicker(false)}
                        selectedTime = {selectedTime}
                        setSelectedTime = {(val)=>setTime({value:val.value,flag:val.flag})}
                        selectedTimeZone = {selectedTimeZone}
                        setTimeZone = {(val)=>setTimeZone(val)}

                    ></TimePicker>
                    :null
            }
            <div className="menu-items buttons">
                    {
                        selectedTime.value === ''?
                        <button onClick={()=>setTimePicker(true)}>+ Add Time</button>
                        :<button onClick={()=>setTimePicker(true)}>Time: {selectedTime.value}</button>
                    }
                    <button disabled>Save</button>
            </div>
            
        </div>
    );
}

export default ManualDatePicker;