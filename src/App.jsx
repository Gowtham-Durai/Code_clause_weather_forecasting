import { useState,useEffect } from "react"
import Navbar from "./Components/Navbar"
import Cloud1 from "./Components/cloud1"
import Cloud2 from "./Components/cloud2"
import Cloud3 from "./Components/cloud3"
import WeekCloud from "./Components/weekcloud"
import {getData} from "./Components/NavSearch"
const app={
  main:{
     
      minHeight:"100%",
      display:"flex",
      flexDirection:"column",
  },
  frame:{
    padding:"15px 5vw 15px 5vw",
    flex:"1 1 auto",
    display:"grid",
    gap:"15px",
    gridTemplateColumns:"60% 40%",
  },
  right:{
    padding:"10px",
    paddingLeft:"20px",
    backgroundColor:"white",
    borderRadius:"20px",
  

  },
  left:{
   
    display:"grid",
    gap:"10px",
  },
  cloud:{
    display:"flex",
    padding:"30px",
    height:"32vh",
    overflow:"hidden",
    backgroundColor:"white",
    borderRadius:"20px",
  }
}

let d={name:"",temp:"",weak:[],icon:"13d",desc:"",wind:"",
  hour:[["","",""],["","",""],["","",""],["","",""],["","",""]],
  sweek:[["","",""],["","",""],["","",""],["","",""],["","",""]]
};

function App() {
  const [data,setData] = useState(d)
  useEffect(() =>{getData("chennai",setData);},[]);
 

  return (
    <div style={app.main}>
      <Navbar data={data} setData={setData} />
      <div style={app.frame}>
            <div className="left" style={app.left}>
                  <div className="cloud" style={app.cloud}>
                      <Cloud1 data={data}/>
                  </div>
                  <div className="cloud c2" style={app.cloud}>
                      <Cloud2  data={data}/>
                  </div>
                  <div className="cloud" style={app.cloud}>
                        <Cloud3 data={data}/>
                  </div>
            </div>
            <div className="right" style={app.right}>
                <WeekCloud data={data}/>
            </div>
      </div>
    </div>
  )
}

export default App
