import sunny from "../Resource/sunny.png"
import cloudy from "../Resource/cloud.png"
import rainy from "../Resource/rainy.png"
import sunnycloudy from "../Resource/sunnycloudy.png"
import thunder from "../Resource/thunder.png"
import wind from "../Resource/icon/wind.png"
import drop from "../Resource/icon/drop.png"
import sun from "../Resource/icon/sun.png"
import temp from "../Resource/icon/temp.png"

function Int(value){
    if(value!="")
    return parseInt(/[0-9]+/g.exec(value)[0]);
    else return 1;
}
;

export function valueImage(v){
    v=Int(v);
 
    if(v==1)return image({weather:"sunny"});
    else if(v==3)return image({weather:"cloudy"});
    else if(v==2 || v==4)return image({weather:"dim"});
    else if(v==10)return image({weather:"rainy"});
    else if(v==11)return image({weather:"thunder"});
    else return image({weather:"cloudy"});
}   
function image(props){
    switch(props.weather){
        case "sunny": return  sunny;
        case "cloudy": return  cloudy;
        case "rainy": return  rainy;
        case "dim": return  sunnycloudy;
        case "thunder": return  thunder;

    }
}

function icon(props){
    switch(props.type){
        case "temp": return  temp;
        case "wind": return  wind;
        case "drop": return  drop;
        case "sun": return  sun;

    }
}
export function Forecast(props){
    return (<div  style={{display:"flex",flexDirection:"column",letterSpacing:"0.03rem",justifyContent:"center",width:"7.2rem"}}>
       
        <h3 style={{marginBottom:"0",marginTop:"0px",textAlign:"center"}}>{props.time}</h3> 
        <img src={valueImage(props.weather)} alt="weather" loading="lazy" style={{width:"90%",height:"100%"}} className="forecast" />
        <h1 style={{margin:"0",fontSize:"2.2rem",textAlign:"center"}}>{props.temp}</h1>

    </div>);    
}

export function WeatherDetails(props){
    return (<div >
        <div className="weatherdetails" style={{display:"flex",alignItems:"center",height:"0.5rem"}}>
            <img src={icon(props)} alt="icon" style={{width:"2rem"}} />
            <p>{props.text}:</p>
            
        </div>
        <h2>
            {props.value}
        </h2>

    </div>);
}
const week=["Sun","Mon","Tues","Wed","Thru","Fri","Sat"]
function day(d){
    if(d!=""){
const date = new Date(d * 1000); // Convert to milliseconds
const weekday = date.getDay();
return week[weekday];}
return "";
}
export function WeekRow(props){
    return (<div style={{display:"grid",gridTemplateColumns:"20% 47% 33%",height:"4rem"}} className="row">
                <h2>{day(props.day)}</h2>
                <div style={{display:"flex",justifyContent:"center"}}> 
                     <img src={valueImage(props.weather)} alt="icon" style={{width:"4rem",}} /></div>
                <h2 className="temp">{props.temp}</h2>
    </div>);
}
