import React from 'react'
import {FullNavLogged} from "../../Common/FullNavLogged"
import { AreaContainer } from '../../components/Chat/AreaContainer'
import { ChatPanel } from '../../components/Chat/ChatPanel'
import {Footer} from "../../Common/Footer"

export function ChatPreview(){
    return(
        <>
        <FullNavLogged />
        <main className="dp-flex height-100vh">
            <ChatPanel />
            <AreaContainer />
        </main>
        <Footer />
        </>
    )
}