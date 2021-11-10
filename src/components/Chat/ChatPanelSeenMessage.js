import React from 'react'
import { ChatUserImg } from '../Chat/ChatUserImg'
import { ChatRemittentInfo } from '../Chat/ChatRemittentInfo'

export function ChatPanelSeenMessage(){
    return(
        <>
        <div className="chat__conversation dp-flex align-items-center pad-5px">
            <ChatUserImg avatar="" />
            <ChatRemittentInfo userFullName="" />
        </div>
        </>
    )
}