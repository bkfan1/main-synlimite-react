import React from 'react'

export function ProductPostActionsForm(){
    return(
        <>
        <form className="productPost_actionsForm dp-flex flex-dir-col mar-top-10px">
            <h1>Acciones:</h1>
            <input type="number" name="" id="" className="pos-time pad-10px mar-top-5px border-radius-rounded text-align-center mar-bottom-10px" placeholder="1" min="1" />
            <button className="bg-color-skyblue2 pad-5px border-radius-rounded color-white">Comprar</button>
            
            <button className="bg-color-lightskyblue pad-5px mar-top-10px mar-bottom-10px border-radius-rounded color-white">Añadir al carrito <i className="bi bi-cart-plus"></i></button>
            <button className="bg-color-darkgray pad-5px border-radius-rounded color-white">Iniciar chat <i className="bi bi-chat-text"></i></button>
        </form>
        
        </>
    )
}