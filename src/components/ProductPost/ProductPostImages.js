import React from 'react'

export function ProductPostImages(){
    return(
        <>
        <div className="product-main-img-container dp-flex flex-dir-col">
            <div className="product-main-img border-radius-rounded"></div>
            
            <div className="secondary-img-container dp-flex justify-cnt-sb width-100per pad-top-5px">
                <div className="product-secondary-img border-radius-rounded"></div>
                <div className="product-secondary-img border-radius-rounded"></div>
                <div className="product-secondary-img border-radius-rounded"></div>
            </div>

        </div>
        </>
    )
}