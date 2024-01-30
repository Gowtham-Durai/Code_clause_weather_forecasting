import { WeekRow } from "./cloud-forecast"

export default function WeekCloud({data}){
    return (<div style={{width:"100%",padding:"10px"}} className="weekcloud"  >
        <h2>5 DAY FORECAST</h2>
        <div style={{display:"grid",gap:"2rem"}}>
            {   
                data.sweek.map((wk,idx)=>{
                    return <WeekRow key={idx} day={wk[0]} weather={wk[1]} temp={`${wk[2]}°`}/>
                })
            }
            
           
        </div>
        
    </div>)
}