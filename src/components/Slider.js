import React from 'react'
import ImagenSubasta from "../../src/static/img/subasta.jpg"


export function Slider(){
    return(
        <>
        <div className="slider-home width-100per">
            <img src={ImagenSubasta} alt="Slider" className="slider-img bg-color-mainblue" />
            <button className="pos-absolute slider-btn cursor-pointer"><i className="bi bi-arrow-left"></i></button>
            <button className="pos-absolute slider-btn cursor-pointer"><i className="bi bi-arrow-right"></i></button>
        </div>
        </>
    )
}