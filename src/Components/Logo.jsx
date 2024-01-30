
const logoStyles = {
    logo: {
        
        display:"grid",
        gridTemplateColumns:"0.4fr 0.6fr",
        width:"8em",
        gap:"10px",
        fontWeight:"bold",
        color:"#47a9eb",
        fontFamily:" 'Inter', sans-serif",
        fontSize:"1.3rem",
    },
    logoBg:{
        background:"#47a9eb",
        display:"flex",
        color:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"0.5rem",
       
    },
    logoText:{
        alignItems:"center",
    }
};

export default function Logo() {
    return(
        <div className="logo" style={logoStyles.logo}>
            <div className="logoBg" style={logoStyles.logoBg}>
                Gi
            </div>
            <div className="logoText" style={logoStyles.logoText}>
                Weather <br /> Forecast
            </div>
        </div>
    )
}