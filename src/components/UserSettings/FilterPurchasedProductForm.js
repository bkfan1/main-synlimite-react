import React from 'react'

export function FilterPurchasedProductForm(){
    return(
        <>
        <form className="dp-flex align-items-center pad-5px mar-bottom-10px">
            <span className="font-size-20px mar-right-10px">Filtrar por:</span>
            <select name="" id="" className="purchase-filter bg-color-white pad-10px border-radius-rounded border2">
                <option value=""></option>
                <option value="">Valor</option>
                <option value="">Titulo [A-Z]</option>
                <option value="">Fecha</option>
                <option value="">Estrellas [1-5]</option>
            </select>
        </form>
        
        </>
    )
}