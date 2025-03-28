import React from "react"
import user from "../Images/images.jpeg"
const ContactCard=(prop)=>{
    const {id,name,email}=prop.contact;
   return(

    
    <div className="item">
      
    
      <div className="content">
        <img className="ui avatar image" src={user}></img>
        <div className="header">{name}</div>
        
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}
    onClick={()=>prop.clickHander(id)}></i>
    </div>

   )

}
export default ContactCard;