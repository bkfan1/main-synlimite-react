import React from 'react'

export function FilterResultCategoryForm(){
    return(
        <>
        <div className="filterUbicationForm dp-flex flex-dir-col pad-10px">
            <h2 className="font-size-22px">Categorías</h2>

            {/* Las categorías a mostrar serán dinámicas en base a la búsqueda realizada por el usuario */}
            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Muebles</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Mueblería</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Sofás</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="dp-flex justify-cnt-sb pad-top-5px pad-bottom-5px">
                <label>Sillas</label>
                <input type="checkbox" name="" id="" />
            </div>

            <div className="pad-top-10px">
                <button className="cursor-pointer color-secondblue">Ver todos</button>
            </div>
        </div>
    
        </>
    )
}