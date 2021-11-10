import React from 'react'
import { ChatHeaderActions } from '../Chat/ChatHeaderActions'
import { ChatUserImg } from '../Chat/ChatUserImg'
import { ChatHeaderRemittentInfo } from '../Chat/ChatHeaderRemittentInfo'

export function ChatHeader(props){
    return(
        <>
        <header className="chat__conversation-header  dp-flex flex-dir-col justify-cnt-center align-items-center width-100per pad-10px">
            <ChatHeaderActions/>
            <ChatHeaderRemittentInfo userFullName="" userUbication="" userWorksIn="" />
        </header>
        </>
    )
}