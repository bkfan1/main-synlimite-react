import React from 'react'
import TechImg from "../../../static/img/tech.jpg"


export function CategoryCard_II(){
    return(
        <>
        <a href="">
            <div className="card-category dp-flex flex-dir-col border-radius-rounded box-shadow1">
                <img src={TechImg} alt="" className="card-category-img" />
                <div className="card-title-container dp-flex pad-left-20px pad-right-20px justify-cnt-center align-items-center">
                    <span className="card-title font-size-18px text-align-center">Computación, celulares y tecnología</span>
                </div>
            </div>
        </a>
        
        </>
    )
}