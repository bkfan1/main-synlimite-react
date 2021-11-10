import React from 'react'
import { ChatHeader } from '../Chat/ChatHeader'
import {ReceiverMessage} from "../Chat/ReceiverMessage"
import {RemittentMessage} from "../Chat/RemittentMessage"
import {SendMessageForm} from "../Chat/SendMessageForm"
import {MediaActions} from "../Chat/MediaActions"

export function AreaContainer(props){
    return(
        <>
         <section className="chat__chat-area dp-flex flex-dir-col">
            <ChatHeader />
           <div className="chat__chat-container dp-flex flex-dir-col pad-20px">
               {/*Estos mensajes solo sirven a manera de ejemplo, y serán removidos
               una vez el código esté en producción.*/}
               <ReceiverMessage />

               <RemittentMessage />
               <ReceiverMessage />

               <RemittentMessage />
               <ReceiverMessage />

               <ReceiverMessage />
               <RemittentMessage />
           </div>
           
           <div className="width-100per dp-flex flex-dir-col ">
               <SendMessageForm />
               <MediaActions />
           </div>
        </section>
        </>
    )
}