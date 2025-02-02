import React from "react";
import user from "../images/user1.jpg";


const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user1" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{id}</div>
          <div>{email}</div>
        </div>
        <i className="trash alternate outline icon"
         style={{color: 'red', marginTop:"7px"}}
         onClick={() => props.clickHander(id)}
         ></i>
         </div>
    );
};
export default ContactCard;