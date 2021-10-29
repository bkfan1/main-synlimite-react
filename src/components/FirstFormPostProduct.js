import React from 'react'

export function FirstFormPostProduct(){
    return(
        <>
        <form action="" className="form-post-product-1 pad-20px mar-top-20px border2">
            <div className="dp-flex flex-dir-col width-100per">
                <h1 className="font-size-22px font-weight-normal">Título</h1>
                <input type="text" name="" id="" className="input-form width-100per mar-top-10px border-radius-rounded" placeholder="Ej. Celular Xiaomi Redmi Note 8" />
            </div>
            
            <div className="dp-flex flex-dir-col width-100per mar-top-10px">
                <h1 className="font-size-22px font-weight-normal mar-top-10px">Descripción</h1>
                <textarea name="" id="" cols="30" rows="10" className="input-textarea mar-top-10px border-radius-rounded" placeholder="Ej. Nuevo de paquete, único dueño"></textarea>
            </div>
            
            <div className="dp-flex flex-dir-col width-100per mar-top-10px">
                <h1 className="font-size-22px font-weight-normal mar-top-10px">Ubicación <i class="bi bi-geo-alt"></i></h1>
                <input type="text" name="" id="" className="input-form width-100per mar-top-10px" placeholder="Ej. Barinas, Venezuela" />
            </div>
            
            <div className="dp-flex width-100per pad-top-20px justify-cnt-sb">
                <button type="submit" className="cursor-pointer">Cancelar</button>
                <button type="submit" className="cursor-pointer bg-color-skyblue2 pad-10px border-radius-rounded color-white">Continuar</button>
            </div>
        </form>
        
        </>
    )
}