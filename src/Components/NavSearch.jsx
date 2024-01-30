import search from "../Resource/globe.png"
import './navsearch.css'
const nav={
    navdiv:{
        width:"40%",
        marginLeft:"auto",
        display:"flex",
        border:"2px solid #47a9eb",
        padding:"5px 9px 5px 9px ",
        borderRadius:"10px",
        flexDiection:"row",
        alignItems:"center",  
    },
    searchInput:{
        color:"#47a9eb",
        width:"100%",
        border:"none",
        fontSize:"1.4rem",
    },
    search:{
        height:"2rem",
    },
    searchFocus:{
        outline:"none",
        
    }
    
}
const api_key="f3be3cc09e686716d0f3a7875cc9b941";

let weatherdata={};
const searchi=document.getElementsByClassName("search");
async function press(e,setData){
    if(e.keyCode==13){
        const loc=searchi[0].value;
        getData(loc,setData);
    }
}
export async function getData(loc,setData){
 
    if(loc.trim()==="")return ( 0);
        const URL=`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${api_key}`
        try {
            const response =await fetch(URL);
            weatherdata = await response.json();
            let cur=weatherdata.list[0];
            let date=new Date(cur.dt_txt);
            let hr=[];
            let week=[];
            for(let i=0;i<5;i++){
                let c=weatherdata.list[i];
                date=new Date(c.dt_txt);
                let t=date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',hour12: true });
                let ic=c.weather[0].icon;
                let tpe=Math.ceil(c.main.temp-273.15);
                hr.push([t,ic,tpe]);
            }     
            for(let i=0;i<5;i++){
                let c=weatherdata.list[i*8];
                date=new Date(c.dt_txt);
                let t=c.dt;
                let ic=c.weather[0].icon;
                let tpe=Math.ceil(c.main.temp-273.15);
                week.push([t,ic,tpe]);
            }           

            setData({name:weatherdata.city.name,
                    temp:Math.ceil(cur.main.temp-273.15),
                    icon:cur.weather[0].icon,desc:cur.weather[0].description,
                    wind:cur.wind.speed,
                    hour:hr,
                    sweek:week
                });
            
        }
        catch(e){
            console.log("Can't load weather data "+e);
        }
}
export default function NavSearch({data,setData}){
    
    return (<div style={nav.navdiv}>
        <input type="text" style={nav.searchInput}  onKeyUp={(e)=>press(e,setData)} className="search" placeholder="Search for cities" />
        <img src={search} alt="search" style={nav.search} />
    </div>);
}