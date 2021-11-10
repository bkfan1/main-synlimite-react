import React from 'react'
import JohnDoeImg from "../../static/img/person.jpg"


export function UserPanelAvatar(props){
    return(
        <>
        <img className="user-pfp" src={props.avatar === "" ? JohnDoeImg : props.avatar} alt="Imagen de Usuario" />
        </>
    )
}