import React from 'react'

export function ModalWindow(){

    return(
        <>
        <figure className="modal-window dp-flex flex-dir-col justify-cnt-center align-items-center border-radius-rounded box-shadow1">
            <i className="bi bi-exclamation-circle-fill color-statsred modal-icon"></i>
            <h1 className="font-size-24px">¡Espera!</h1>
            <span className="width-80per text-align-center mar-top-10px mar-bottom-20px">Tienes productos en el carrito. Por favor termina tu compra y luego podrás cerrar la sesión.</span>
            
            <div className="dp-flex width-100per justify-cnt-se">
                <a href=""><button className="modal-btn bg-color-skyblue2 color-white border-radius-rounded">Volver al carrito <i className="bi bi-cart3"></i></button></a>
                <a href=""><button className="modal-btn bg-color-crimson color-white border-radius-rounded">Cerrar sesión <i className="bi bi-arrow-right-circle"></i></button></a>
            </div>
        </figure>
        </>
    )

}