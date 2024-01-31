import { Forecast } from "./cloud-forecast";
import { valueImage } from "./cloud-forecast";
const forecast={
    block:{
        display:"flex",
        justifyContent:"center",
       
    },
    header:{
        margin:"0",
        },
      

}

export default function cloud2({data}){
    return(<div >
        <h2 style={forecast.header}>TODAY FORECAST</h2>
      
            <div style={forecast.block}>
                {}
                {
                    
                    data.hour.map((hr,idx)=>{
              
                       return <Forecast key={idx} time={hr[0]} weather={hr[1]} temp={`${hr[2]}°`}/>
                    })
                    

                }
                

            </div>

    
    </div>);
}
