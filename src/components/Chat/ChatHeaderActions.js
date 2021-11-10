import React from 'react'

export function ChatHeaderActions(){
    return(
        <>
        <ul className="chat__option-menu dp-flex">
            <li><button className="chat__action-btn"><i className="bi bi-flag font-size-20px" title="Reportar usuario"></i></button></li>
            <li><button className="chat__action-btn mar-left-5px mar-right-5px" title="Archivar chat"><i className="bi bi-archive font-size-20px"></i></button></li>
            <li><button className="chat__action-btn"><i className="bi bi-trash font-size-20px" title="Eliminar chat"></i></button></li>
        </ul>
        </>
    )
}