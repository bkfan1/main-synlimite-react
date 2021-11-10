import React from 'react'
import JohnDoeImg from "../../static/img/jonathan.png"


export function ChatUserImg(props){
    return(
        <>
        <a href="" >
            <img src={props.avatar === "" ? JohnDoeImg : props.avatar} className="chat__remittent-img" alt="Imagen de usuario" />
        </a>
        </>
    )
}