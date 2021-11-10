import React from 'react'

export function ChatRemittentInfo(props){
    return(
        <>
        <div className="chat__remittent-info dp-flex flex-dir-col pad-left-5px">
            {/*Nombre del usuario*/}
            <a href=""><span className="chat__remittent-name font-weight-bold">{props.userFullName === "" ? "Cargando..." : props.userFullName}</span></a>
            {/*Fragmento del mensaje recibido */}
            <p className="chat__remittent-message">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        </>
    )
}