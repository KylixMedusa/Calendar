import React, { useState } from 'react';
import Popper from '../Popper/Popper';
import './TimePicker.scss'
import LocationSelector from '../LocationSelector/LocationSelector';

type Props = {
    close:()=>void,
    selectedTime:{value:string,flag:boolean},
    setSelectedTime : (arg0:{value:string,flag:boolean})=>void,
    selectedTimeZone:string,
    setTimeZone : (arg0:string)=>void
}

const TimePicker: React.FC<Props> = (props)=>{

    const [locationselectorviewing,setlocationselector] = useState(false);
    const pattern:RegExp = /([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}/;
    const [errorviewing,setErrorViewing] = useState(false);
    const [time,setTime] = useState(props.selectedTime.value);

    function inputCheckHandler(e:any){
        let str = e.target.value;
        setTime(str);
        if(str.match(pattern) && str.length === 5){
            setErrorViewing(false);
        }
        else
            setErrorViewing(true);
        if(str.length === 0)
            setErrorViewing(false);
    }

    function setTimeHandler(){
        props.setSelectedTime({value:time,flag:true});
        props.close();
    }

    return(
        <Popper close={props.close}>
            <div className="time-picker">
                <div className="time-container">
                    <div>
                        <p>Time</p>
                        <div>
                            {
                                errorviewing?
                                <span><svg width="20" height="20" viewBox="0 0 24 24"><g fill="#979797" fill-rule="evenodd"><path d="M12 9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path><path d="M13.73 4.96L20.75 17A2 2 0 0 1 19.02 20H4.98a2 2 0 0 1-1.73-3l7.02-12.04a2 2 0 0 1 3.46 0zm-.7.55a1.2 1.2 0 0 0-2.07 0L4.15 17.2A1.2 1.2 0 0 0 5.18 19h13.64a1.2 1.2 0 0 0 1.03-1.8L13.04 5.5z"></path></g></svg></span>
                                :null

                            }
                            <input type="text" placeholder="Eg. 14:00" onChange={inputCheckHandler} value={time}/>
                        </div>
                    </div>
                    <p onClick={()=>setlocationselector(true)}>{props.selectedTimeZone} &gt;</p>
                    {
                        locationselectorviewing?
                            <LocationSelector
                                close={()=>setlocationselector(false)}
                                setTimeZone = {(value:string)=>props.setTimeZone(value)}
                            >
                            </LocationSelector>
                            :null
                    }
                </div>
                
                <div className="time-container-buttons">
                    <button disabled={errorviewing || time.length===0} onClick={setTimeHandler}>Add</button>
                    <button onClick={props.close}>Cancel</button>
                </div>
            </div>
        </Popper>
    );
}

export default TimePicker;