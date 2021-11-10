import React from 'react'
import BTCLogo from "../../static/img/btc-logo.png"

export function SecondFormPosProduct(){
    return(
        <>
        <form action="" className="form-pos-product-1">
            <div className="dp-flex flex-dir-col width-100per ">
                <h1 className="font-size-26px pad-bottom-5px">Confirma los datos</h1>
                <p>Verifica el tiempo en que posicionarás tu producto. Si todo está correcto, presiona confirmar. De lo contrario, presiona volver y arréglalo.</p>
            </div>
    
            <div className="dp-flex flex-dir-row width-100per justify-cnt-sb mar-top-20px">
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="H" disabled />
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="M" disabled />
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="S" disabled />
            </div>
            
            <div className="dp-flex width-100per mar-top-20px">
                <h1 className="font-size-20px">Método de pago</h1>
            </div>
            
            <div className="dp-flex width-100per mar-top-10px">
                <img src={BTCLogo} alt="" className="payment-img" />
            </div>
    
            <div className="dp-flex width-100per flex-dir-col pad-top-20px">    
            <h2 className="font-size-20px pad-top-20px">Total a pagar:</h2>
            <h3 className="font-size-20px mar-top-5px">9.999$</h3>
            </div>
    
            <div className="dp-flex flex-dir-row width-100per justify-cnt-sb pad-top-20px">
                <button type="submit" className="cursor-pointer bg-color-darkgray color-white border-radius-rounded pad-10px">Cancelar</button>
                <button type="submit" className="cursor-pointer bg-color-skyblue2 pad-10px border-radius-rounded color-white">Continuar</button>
            </div>
    
        </form>
        </>
    )
}