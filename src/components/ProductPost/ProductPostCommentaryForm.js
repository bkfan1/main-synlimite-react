import React from 'react'

export function ProductPostCommentaryForm(){
    return(
        <>
        <form action="" className="comment-form dp-flex flex-dir-col mar-top-20px mar-bottom-20px">
            <textarea name="" id="" cols="40" rows="8" className="border-radius-rounded" placeholder="Realiza una pregunta..."></textarea>
            <button className="bg-color-skyblue2 pad-10px mar-top-5px border-radius-rounded cursor-pointer color-white">Enviar comentario</button>
        </form>
        </>
    )
}