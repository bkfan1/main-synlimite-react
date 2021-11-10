import React from 'react'

export function MediaActions(){
    return(
        <>
        <div className="width-100per pad-10px">
            <div className="chat__action-btn-container dp-flex mar-left-10px">
                {/*Este botón debe activar el filesystem para poder subir una imágen desde el dispositivo*/}
                <button><i className="bi bi-image chat__action-btn font-size-24px"></i></button>
                {/*Este botón debe pedir permisos para activar el micrófono y poder enviar una nota de voz
                (queda pendiente agregar una vista previa de la imagen al chatbox)*/}
                <button><i className="bi bi-mic chat__action-btn font-size-24px"></i></button>

                {/*Este botón debe pedir permisos para activar la cámara y poder tomar fotos
                 (queda pendiente agregar una vista previa de la foto al chat box)*/}
                <button><i className="bi bi-camera chat__action-btn font-size-24px"></i></button>

                <button><i className="bi bi-emoji-smile chat__action-btn font-size-24px"></i></button>
            </div>
        </div>
        </>
    )
}