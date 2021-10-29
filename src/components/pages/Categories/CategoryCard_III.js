import React from 'react'
import MueblesImg from "../../../static/img/muebles.jpg"

export function CategoryCard_III(){
    return(
        <>
        <a href="">
            <div className="card-category dp-flex flex-dir-col border-radius-rounded box-shadow1">
                <img src={MueblesImg} alt="" className="card-category-img"/>
                <div className="card-title-container dp-flex pad-left-20px pad-right-20px justify-cnt-center align-items-center">
                    <span className="card-title font-size-18px text-align-center">Hogar y muebles</span>
                </div>
            </div>
        </a>
        </>
    )
}