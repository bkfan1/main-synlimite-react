import React from 'react'

export function FilterRefundsForm(){
    return(
        <>
        <form className="dp-flex align-items-center width-100per pad-top-10px pad-bottom-20px">
            <h1 className="font-size-20px mar-right-10px">Filtrar por:</h1>
            <select name="" id="" className="purchase-filter bg-color-white pad-10px border-radius-rounded border2">
                <option value="">Completadas</option>
                <option value="">En espera</option>
                <option value="">Rechazadas</option>
            </select>
        </form>

        </>
    )
}