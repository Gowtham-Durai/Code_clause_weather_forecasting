import { WeatherDetails } from "./cloud-forecast";
export function titleCase(string){
      return (string.length>0)?string[0].toUpperCase() + string.slice(1).toLowerCase():"";
    }
export default function cloud3({data}){
          return (<div style={{width:"100%"}} className="cloud3">
          <h2 style={{marginTop:"0",}}>AIR CONDITIONS</h2>
          <div style={{display:"grid",gridTemplateColumns:"50% 50%",gridTemplateRows:"50% 50%",height:"100%"}}>
                <WeatherDetails text="Real Feel" type="temp" value={`${data.temp}°`}/>
                <WeatherDetails text="Wind" type="wind" value={`${data.wind} Km/hr`}/>
               <WeatherDetails text="Climate" type="drop" value={titleCase(data.desc)}/>
                


          </div>
    </div>);
}