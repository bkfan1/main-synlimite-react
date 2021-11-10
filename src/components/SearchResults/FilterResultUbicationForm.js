import React from 'react'

export function FilterResultUbicationForm(){
    return(
        <>
        <div className="filterUbicationForm dp-flex flex-dir-col pad-10px">
            <h2 className="font-size-22px">Ubicación</h2>

            {/* Las ubicaciones a mostrar serán dinámicas en base a la IP del usuario */}
            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Distrito Capital</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Carabobo</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Lara</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Falcón</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Zulia</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="pad-top-10px">
                <button className="cursor-pointer color-secondblue">Ver todos</button>
            </div>
        </div>
        </>
    )
}