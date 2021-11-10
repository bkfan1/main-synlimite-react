import React from 'react'

export function PagesList(){
    return(
        <>
        <form className="dp-flex justify-cnt-sb align-items-center width-100per mar-top-20px">
            <button className=" cursor-pointer bg-color-skyblue2 color-white border-radius-rounded pad-10px"> Atrás </button>
            <ul className="dp-flex">
                <li className="mar-right-10px"><a href="">1</a></li>
                <li className="mar-right-10px"><a href="">2</a></li>
                <li className="mar-right-10px"><a href="">3</a></li>
                <li className="mar-right-10px"><a href="">4</a></li>
                <li className="mar-right-10px"><a href="">5</a></li>
                <li className="mar-right-10px"><a href="">6</a></li>
            </ul>
            
            <button className="cursor-pointer bg-color-skyblue2 color-white border-radius-rounded pad-10px"> Avanzar </button>
        </form> 
        </>
    )
}

