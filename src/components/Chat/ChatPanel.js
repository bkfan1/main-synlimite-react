import React from 'react'
import { ChatPanelSearchForm } from '../Chat/ChatPanelSearchForm'
import { ChatPanelSeenMessage } from '../Chat/ChatPanelSeenMessage'
import { ChatPanelUnseenMessage } from '../Chat/ChatPanelUnseenMessage'

export function ChatPanel(){
    return(
        <>
        <aside className="chat__panel dp-flex flex-dir-col">
            <header className="chat__panel-header dp-flex flex-dir-col justify-cnt-center align-items-center pad-15px text-align-center">                
                <div className="dp-flex align-items-center justify-cnt-center">
                    <i className="bi bi-mailbox2 font-size-24px"></i>
                    <h2 className=" mar-left-10px">Bandeja de entrada</h2>
                </div>
            </header>

            <div className="pad-5px">
                <ChatPanelSearchForm/>
            </div>

            <div className="chat__panel-conversations-area">
                {/* Los siguientes mensajes de entrada están puestos a manera de ejemplo,
                y serán removidos una vez esté en producción.*/}
                <ChatPanelSeenMessage/>
                <ChatPanelUnseenMessage />
                <ChatPanelSeenMessage />
                <ChatPanelUnseenMessage />
                <ChatPanelUnseenMessage />
    
            </div>
        </aside>
        </>
    )
}