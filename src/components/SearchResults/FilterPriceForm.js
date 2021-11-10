import React from 'react'

export function FilterPriceForm(){
    return(
        <>
        <div className="pad-10px">
            {/*El valor en la etiqueta h2 aumentará conforme el usuario suba o baje
            el valor del input "range" */}
            <h2>Precio: 9.999$</h2>
            <input type="range" name="" id="" />
        </div>
        
        </>
    )
}