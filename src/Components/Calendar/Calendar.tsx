import React, { useState, useEffect} from 'react';
import './Calendar.scss';

type Props = {
    selectedDate : {value:string,flag:boolean},
    changeDate : (val:string,flag:boolean)=>void
}

const Calendar: React.FC<Props> = (props)=>{
    const [dateshowing, setdateshowing] = useState("");
    const [stylesTop, setstylesTop] = useState(['0px','207.7px']);
    const [headings, setheadings] = useState(['Jan','Feb']);
    const [dateNodes,setDateNodes] = useState([[<div>1</div>,<div>1</div>],[<div>1</div>,<div>1</div>]]);
    const [buttonscheck,setButtonsCheck] = useState(true);
    
    // const [lastpos, setlastpos] = useState(0);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        // console.log(dd,mm,yyyy);

        var months = new Map();
        months.set(1,{name:'Jan',days:31});
        months.set(2,{name:'Feb',days:28});
        months.set(3,{name:'Mar',days:31});
        months.set(4,{name:'Apr',days:30});
        months.set(5,{name:'May',days:31});
        months.set(6,{name:'Jun',days:30});
        months.set(7,{name:'Jul',days:31});
        months.set(8,{name:'Aug',days:31});
        months.set(9,{name:'Sep',days:30});
        months.set(10,{name:'Oct',days:31});
        months.set(11,{name:'Nov',days:30});
        months.set(12,{name:'Dec',days:31});

        var lastpos = 0;
        var startmonth = parseInt(mm);

        useEffect(()=>{
            update();
            setdateshowing(String(months.get(startmonth%12 === 0 ? 12:startmonth%12).name)+" "+String(Math.floor((lastpos+parseInt(mm)-1)/12)+yyyy));
            document.getElementById("schedule-date-container")?.addEventListener('scroll',checkscroll);
            setButtonsCheck(true);

            return ()=>{
                document.getElementById("schedule-date-container")?.removeEventListener('scroll',checkscroll);
            }
        },[])


        function checkscroll(){
            var scroll = document.getElementById("schedule-date-container")?.scrollTop;
            if(scroll){
                if(Math.floor(scroll/207.27)>lastpos){
                    startmonth += Math.floor(scroll/207.27) - lastpos;
                    lastpos = Math.floor(scroll/207.27);
                    update();
                    setdateshowing(String(months.get(startmonth%12 === 0 ? 12:startmonth%12).name)+" "+String(Math.floor((lastpos+parseInt(mm)-1)/12)+yyyy));
                }
                if(Math.floor(scroll/207.27)<lastpos && lastpos>0){
                    startmonth += Math.floor(scroll/207.27) - lastpos;
                    lastpos = Math.floor(scroll/207.27);
                    update();
                    setdateshowing(String(months.get(startmonth%12 === 0 ? 12:startmonth%12).name)+" "+String(Math.floor((lastpos+parseInt(mm)-1)/12)+yyyy));
                }
                if(lastpos<1){
                    setButtonsCheck(true);
                }
                else{
                    setButtonsCheck(false);
                }
            }
        }

        function update(){
                var heading = [];
                var styles = [];
                var nodes: JSX.Element[][] = [];
                for(var index=-3;index<=3;index++){
                
                    var node:JSX.Element[] = [];
                    var monthindex = (startmonth+index)%12 === 0 ? 12:(startmonth+index)%12;
                    var details = months.get((startmonth+index)%12 === 0 ? 12:(startmonth+index)%12);
                    heading.push(details.name);
                    var year = Math.floor((lastpos+parseInt(mm)+index-1)/12)+yyyy;
                    var firstdate = new Date(year, ((startmonth+index)%12 === 0 ? 12:(startmonth+index)%12)-1, 1);
                    var firstday=firstdate.getDay()===0?7:firstdate.getDay();
                    var length = (index+lastpos)*207.27;
                    styles.push(String(length)+"px");
                    for(var j=1;j<firstday;j++){
                        node.push(<div></div>);
                    }
                    if(length === 0){
                        for(var i=1;i<parseInt(dd);i++){
                            // console.log(item);
                            node.push(<div className="off-days">{i}</div>);
                        }
                        node.push(<div className="days today" onClick={(e)=>setDateHandler(e,year)}>{parseInt(dd)}</div>);
                        for( j=parseInt(dd)+1;j<=details.days;j++){
                            // console.log(item);
                            node.push(<div className="days" onClick={(e)=>setDateHandler(e,year)}>{j}</div>);
                        }
                    }
                    else{
                        for( i=1;i<=details.days;i++){
                            // console.log(item);
                            node.push(<div className="days" onClick={(e)=>setDateHandler(e,year)}>{i}</div>);
                        }
                    }
                    nodes.push(node);
                }
                setstylesTop([...styles]);
                setheadings([...heading]);
                setDateNodes([...nodes]);
        }
        function nextmonth(){
            checkscroll();
            var node = document.getElementById("schedule-date-container");
            if(node){
                node.scrollTop = (lastpos+1)*207.27 + 1;
            }
        }
        function previousmonth(){
            checkscroll();
            var node = document.getElementById("schedule-date-container");
            if(node){
                node.scrollTop = (lastpos-1)*207.27 + 1;
            }
        }
        function currentmonth(){
            var node = document.getElementById("schedule-date-container");
            if(node){
                node.scrollTop = 1;
                checkscroll();
            }
        }
        function setDateHandler(e: any, val:number){
            console.log(e.target.innerText,e.target.parentElement.previousSibling.innerText,val);
        }   

    return (
        <div className="scheduler-calendar">
            <div className="scheduler-calendar-top">
                <p>{dateshowing}</p>
                <div>
                    <button onClick={previousmonth} disabled={buttonscheck}>&lt;</button>
                    <button onClick={currentmonth} disabled={buttonscheck}>Today</button>
                    <button onClick={nextmonth}>&gt;</button>
                </div>
            </div>
            <div className="scheduler-calendar-days">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
            </div>
            <div className="scheduler-calendar-container" id="schedule-date-container">
                {
                    stylesTop.map((style,index) => (
                            <div className="calendar-month" style={{top:style}}>
                                <h4>{headings[index]}</h4>
                                <div className="calendar-month-dates-holder">
                                    {
                                        dateNodes[index].map((node)=>(
                                            node
                                        ))

                                    }
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Calendar;