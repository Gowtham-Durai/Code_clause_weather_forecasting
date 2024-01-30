import Logo from "./Logo";
import menu from "../Resource/menu.svg"
import NavSearch from "./NavSearch";


const navbarStyles={
    navbar:{
        background:"white",
        padding:"10px 10px 10px 10px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    menu:{
        marginLeft:"auto",
        
    },
    menuImg:{
        alignItems:"end",
        height:"3rem",
    }
};



export default function Navbar({data,setData}) {
    
    return (
    <nav className="navbar" style={navbarStyles.navbar}>
        <Logo />
        <NavSearch data={data} setData={setData}  />
        <div style={navbarStyles.menu}>
            <img src={menu} alt="menu" style={navbarStyles.menuImg} />
        </div>
    </nav>);
}