import React from 'react'

export function RefundForm1(){
    return(
        <>
        <form action="" className="refund-form  bg-color-white pad-20px border-radius-rounded border2">
            <div className="dp-flex flex-dir-col">
                <div className="dp-flex flex-dir-col pad-top-5px pad-bottom-5px">
                    <label  className="font-size-18px font-weight-bold pad-bottom-10px">Paso 1: Datos de compra</label>
                    
                    <label className="mar-bottom-15px">Rellena los campos con la información de la compra</label>
                    <label  className="mar-bottom-5px">ID de compra </label>
                    <input type="text" name="" id="" placeholder="#52869" className="input-form border-radius-rounded" />

                    <label  className="mar-top-10px mar-bottom-5px">Valor del producto</label>
                    <input type="number" name="" id="" className="input-form border-radius-rounded" placeholder="000.000.000" />
        
                    <label  className="mar-top-10px mar-bottom-5px">Fecha de compra</label>
                    <input type="date" name="" id="" className="input-form border-radius-rounded" />
                </div>
            </div>

            <div className="dp-flex flex-dir-col">
                <label  className="pad-top-5px pad-bottom-5px">Motivo</label>
                <textarea name="" id="" cols="30" rows="10" className="input-textarea border-radius-rounded"></textarea>
            </div>

             <div className="dp-flex flex-dir-col pad-top-5px">
                <label  className="mar-top-10px mar-bottom-5px">Dirección para devolución</label>
                <input type="text" name="" id="" placeholder="Av Sucre, cruce con Calle Mérida, Barinas - Venezuela" className="input-form border-radius-rounded" />
            </div>

            <div className="width-100per dp-flex justify-cnt-sb pad-top-10px">
                <button type="submit" className="cursor-pointer pad-10px border-radius-rounded">Cancelar</button>
                <button type="submit" className="cursor-pointer bg-color-skyblue2 color-white pad-10px border-radius-rounded">Continuar</button>
            </div>

        </form>
        </>
    )
}