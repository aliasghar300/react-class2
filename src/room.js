import React , {useState} from "react";
import './room.css';


function Room(){
    let [light , setLight] = useState(false);
    
    let [temp , setTemp] = useState(22);
    
    
    return (
    <div className= {`room ${light?"on" : "off"}`}>
        <button className={"onbtn"} onClick={() => {
            setLight(true)
        }}> On </button>
         <button className={"offbtn"} onClick={() => {
            setLight(false)
        }}> Off </button>
        <div>
            <h2 className={`${light ? "on" : "off"}`}> {temp} </h2>    
        </div>
        <div>
            <button className={`tempbtn ${light ? "on" : "off"}`} onClick = {() => {
                setTemp(temp++);
            }}> + </button>
            <button className={`tempbtn ${light ? "on" : "off"}`} onClick = {() => {
                setTemp(temp--);
            }}> - </button>
        </div>


    </div>)
};

export default Room