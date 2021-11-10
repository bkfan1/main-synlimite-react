import React from 'react'

export function SendMessageForm(){
    return(
        <>
        <div className="width-100per pad-left-20px pad-right-20px pad-top-20px">
            <form className="chat__message-form">
                {/*Este text area debe ser autoincrementar sus filas (rows) cuando el usuario exceda
                los X caracteres (x = num a determinar por los devs)*/}
                <input type="search" name="" id="" placeholder="Escribe un mensaje..." className="message-textarea border-radius-rounded" />
            </form>
        </div>
        
        </>
    )
}