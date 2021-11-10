import React from 'react'
import CarAccesoriesImg from "../../static/img/car_accesories.jpeg"

export function CategoryCard_I(){
    return(
        <>
        <a href="">
            <div className="card-category dp-flex flex-dir-col border-radius-rounded box-shadow1">
                <img src={CarAccesoriesImg} alt="Accesorios para vehículos" className="card-category-img" />
                <div className="card-title-container dp-flex pad-left-20px pad-right-20px justify-cnt-center align-items-center">
                    <span className="card-title font-size-18px text-align-center">Accesorios para vehículos</span>
                </div>
            </div>
        </a>
        </>
    )
}