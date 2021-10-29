import React from 'react'
import RopaImg from "../../../static/img/ropa.jpg"


export function CategoryCard_VI(){
    return(
        <>
        <a href="">
            <div class="card-category dp-flex flex-dir-col border-radius-rounded box-shadow1">
                <img src={RopaImg} alt="" class="card-category-img" />
                <div class="card-title-container dp-flex pad-left-20px pad-right-20px justify-cnt-center align-items-center">
                    <span class="card-title font-size-18px text-align-center">Ropa, zapatos e indumentaria</span>
                </div>
            </div>
    
        </a>
        </>
    )
}