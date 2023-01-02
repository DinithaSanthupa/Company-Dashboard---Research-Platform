import React from "react";
import "./Profile.css";

const Profile=()=>{

    const {useState} = React;
    const [usenumber,setusenumber] = useState(1);
    
    const [fullimage,setfullimage]=useState(true);
    
    
    const [isActive,setisActive] = useState(false);
    
    const [heart,setheart]=useState(true);
    
    const ImageClick = () =>{
    
    if(isActive){
    
    setisActive(false);
    }else{
    setisActive(true);
    }
    
    
    }
    const FullImage=()=>{
    if(fullimage){
    setfullimage(false);
    }
    else{
    setfullimage(true);
    }
    }
    
    const Message=()=>{
    setusenumber(usenumber+1);
    }
    
    const Heart=()=>{
    if(heart){
    setheart(false);
    }
    else{
    setheart(true);
    }
    }
    
    return(
    <>
        <div className="container">
            <div className={`card ${isActive ? "black" : "" }`}>
                <div className={`top_part ${isActive ? "font_icons" : "" }`}>
                    <i className="fa fa-arrow-left"></i>
                    <div className="icons">
                        <i onClick={ImageClick} className="fa fa-moon-o"></i>
                        <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart" }`}></i>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>
                </div>
                <div className={`overlay ${fullimage ? "d-none" : "" }`}>
                    <small onClick={FullImage} className="fa fa-close"></small>
                    <img src="https://forcebrands.com/assets/fallback/company-de…e48c7918608f77be903ad2fd38cfc9b6929d095994013.png" />
                </div>
                <div className="circle">
                    <span onClick={FullImage}><img src="https://forcebrands.com/assets/fallback/company-de…e48c7918608f77be903ad2fd38cfc9b6929d095994013.png" /></span>
                    <h2>Auzzie Digital</h2>
                    <h5>Australia</h5>
                </div>
                <p><h2>Company</h2>
                    <h5>Digital Services</h5> </p>
                
                <div className="button">
                    <button onClick={Message}>Message </button>
                </div>
                <div className="social">
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-whatsapp"></i>
                </div>
            </div>
    
        </div>
    
    </>
    );}

    export default Profile;