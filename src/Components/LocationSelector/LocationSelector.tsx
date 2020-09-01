import React from 'react';
import Popper from '../Popper/Popper';
import './LocationSelector.scss'

type Props = {
    close:()=>void,
    setTimeZone: (arg0: string)=>void
}

const LocationSelector: React.FC<Props> = (props)=>{
    const location = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    function updateTimeZone(location:string){
        props.close();
        props.setTimeZone(location);
    }

    return(
        <Popper close={props.close}>
            <div className="location-selector">
                <div onClick={()=>updateTimeZone('Time Zone')}>
                    <p>Floating Time</p>
                    <small>Due time stays the same across time zones</small>
                </div>
                <div onClick={()=>updateTimeZone(location)}>
                    <p>{location}</p>
                    <small>Your current time zone</small>
                </div>
            </div>
        </Popper>
    );
}

export default LocationSelector;