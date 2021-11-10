import React from 'react'
import { ChatUserImg } from '../Chat/ChatUserImg'
import JaneDoeImg  from "../../static/img/jane.png"

export function ChatHeaderRemittentInfo(props){
    return(
        <>
        <div className="dp-flex flex-dir-col justify-cnt-center align-items-center">
            <ChatUserImg avatar={JaneDoeImg}/>
            <ul className="chat__remittent-info-list dp-flex flex-dir-col justify-cnt-center align-items-center">
                <li className="chat__remittent-info2 font-size-24px font-weight-bold"><a href="" >{props.userFullName === "" ? "Cargando..." : props.userFullName }</a></li>
                <li className="chat__remittent-info2"><a href=""><i className="bi bi-geo-alt-fill"></i> {props.userUbication === "" ? "Cargando ubicación..." : props.userUbication}</a></li>
                <li className="chat__remittent-info2"><a href=""><i className="bi bi-shop"></i> {props.userWorksIn === "" ? "Cargando rol..." : props.userUbication }</a></li>
            </ul>
        </div>
        </>
    )
}