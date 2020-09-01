import React from 'react';
import './Popper.scss'

type Props = {
    close:()=>void
}

const Popper: React.FC<Props> = (props)=>{
    return(
        <div className="popper">
            <div className="popper-overlay" onClick={props.close}></div>
            <div className="popper-contents">{props.children}</div>
        </div>
    );
}

export default Popper;