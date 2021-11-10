import React from 'react'

export function FirstFormPosProduct(){
    return(
        <>
        <form action="" className="form-pos-product-1">
            <div className="dp-flex flex-dir-col width-100per ">
                <h1 className="font-size-20px pad-bottom-5px">Posicionar producto</h1>
                <h2 className="font-size-18px font-weight-normal">¿Cuanto tiempo estará posicionado?</h2>
            </div>
            
            <div className="dp-flex flex-dir-row width-100per justify-cnt-sb mar-top-20px">
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="H" />
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="M" />
                <input type="number" name="" id="" className="pos-time text-align-center border-radius-rounded" placeholder="S" />
            </div>
    
            <div className="dp-flex width-100per mar-top-20px">
                <h1 className="font-size-20px">Método de pago</h1>
            </div>
    
            <div className="dp-flex width-100per mar-top-10px">
                <select name="" className="bg-color-white pad-10px border2 border-radius-rounded" id="">
                    <option value="">AXS</option>
                    <option value="">Bitcoin</option>
                    <option value="">BNB</option>
                    <option value="">Cardano</option>
                    <option value="">Dogecoin</option>
                    <option value="">Ethereum</option>
                    <option value="">USDT</option>
                    <option value="">XPR</option>
                </select>
            </div>
            
            <div className="dp-flex width-100per flex-dir-col pad-top-20px">
                <span className="font-size-14px color-gray">AVISO: Al completar la transacción, aceptas estas <a href="" className="color-skyblue font-size-14px">Condiciones de Uso</a>.</span>
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