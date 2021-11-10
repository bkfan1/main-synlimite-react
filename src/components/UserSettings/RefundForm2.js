import React from 'react'

export function RefundForm2(){
    return(
        <>
        <form action="" className="refund-form  bg-color-white pad-20px border-radius-rounded border2">
            <div className="dp-flex flex-dir-col">
                <div className="dp-flex flex-dir-col pad-top-5px pad-bottom-5px">
                    <label className="font-size-18px font-weight-bold pad-bottom-10px">Paso 2: Datos del vendedor</label>
                    <label className="mar-bottom-15px">Rellena los campos con la información del vendedor de tu producto</label >
                    <label className="mar-bottom-5px">E-mail </label>
                    <input type="email" name="" id="" placeholder="john@doe.com" className="input-form border-radius-rounded" />
                    <label className="mar-top-10px mar-bottom-5px">Número de teléfono</label>
                    <input type="tel" name="" id="" placeholder="+584245329012" className="input-form border-radius-rounded" />
                </div>
            </div>

            <div className="dp-flex flex-dir-col">
                <label className="mar-top-10px mar-bottom-5px">Dirección</label>
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