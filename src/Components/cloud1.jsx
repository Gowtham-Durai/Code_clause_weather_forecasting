import { valueImage } from "./cloud-forecast";
import { titleCase } from "./cloud3";
export  default  function Cloud1({data}){
return (
<>
<div className="status">
    <div className="locStatus">
        <h1 style={{margin:"0",fontSize:"40px"}} key="city" className="location">{data.name}</h1>
        <h4 style={{margin:"0"}} className="chance">{titleCase(data.desc)}</h4>
        <br/>
        <h1 style={{margin:"0",fontSize:"100px"}} className="temp">
            {data.temp}º
        </h1>
    </div>


</div>

<img src={valueImage(data.icon)} alt="weather" style={{
    marginLeft:"auto",
    height:"100%", }} />

</>

);
}