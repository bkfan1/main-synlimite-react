import React from 'react'
import { SearchInputNav } from './SearchInputNav'
import { UserNavMenu } from './UserNavMenu'
import SynLimiteLogo from "../static/img/synlimite-logo.png"
import MonedaImg from "../static/img/moneda.png"



export function MainNavLogged(){

    return(
        <>
        <nav className="nav-desk-nl dp-flex flex-dir-col justify-cnt-se align-items-center width-100per">
            <ul className="dp-flex align-items-center justify-cnt-se width-100per pad-left-15px pad-right-15px pad-top-5px bg-color-mainblue">
                <ul className="dp-flex align-items-center">
                    <li><a href=""><img src={SynLimiteLogo} className="header-logo" alt="" /></a></li>
                    <li><a href="" className="mar-left-20px mar-right-20px color-white">Categorías</a></li>
                </ul>
                <SearchInputNav />
                <UserNavMenu />
            </ul>
 
        </nav>
        </>
    )

}