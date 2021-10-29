import React from 'react'
import SynLimiteLogo from "../static/img/synlimite-logo.png"
import { SearchInputNav } from './SearchInputNav'

export function MainNavNotLogged(){

    return(
        <>
        <nav className="nav-desk-nl dp-flex flex-dir-col justify-cnt-se align-items-center width-100per">
            <ul className="dp-flex align-items-center justify-cnt-se width-100per pad-left-15px pad-right-15px pad-top-5px bg-color-mainblue">
                <ul className="dp-flex align-items-center">
                    <li><a href=""><img src={SynLimiteLogo} className="header-logo" alt="" /></a></li>
                    <li><a href="" className="mar-left-20px mar-right-20px color-white">Categorías</a></li>
                </ul>
                
                <ul className="dp-flex justify-cnt-center align-items-center">
                    <li>{<SearchInputNav/>}</li>
                </ul>

                <ul className="dp-flex">
                    <li><button className="nav-button pad-10px mar-left-10px font-weight-bold bg-color-secondblue color-white border-radius-rounded">Iniciar sesión</button></li>
                    <li><button className="nav-button mar-left-10px pad-10px font-weight-bold color-secondblue bg-color-white border-radius-rounded">Registrarse</button></li>
                </ul>
            </ul>

        </nav>
    
        </>
    )

}