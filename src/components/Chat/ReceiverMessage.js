import React from 'react'
import { ChatUserImg } from '../Chat/ChatUserImg'
import JaneDoeImg  from "../../static/img/jane.png"

export function ReceiverMessage(){
    return(
        <>
        <div className="chat__receiver-message-container dp-flex align-items-center pad-10px">
            <ChatUserImg avatar={JaneDoeImg} />
            <p className="chat__receiver-message-text pad-10px mar-left-10px border-radius-rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt rem.</p>
        </div>
        </>
    )
}
