import React from 'react'
import MonedaImg from "../static/img/moneda.png"


export function UserNavMenu(){

    return(
        <>
        <ul className="dp-flex justify-cnt-center align-items-center">
            <li className="pad-right-20px">
                <a href="">
                <span className="color-yellow mar-right-5px">0</span>
                <i className="bi bi-cart3 color-white"></i></a>
            </li>
            
            <li className="pad-right-20px">
                <div className="dp-flex align-items-center">
                    <a href="" className="font-weight-bold color-gold">9.999</a>
                    <img src={MonedaImg} className="coin-img mar-left-5px" alt=""/>
                </div>
            </li>
            
            <li className="user-nav-menu dp-flex justify-cnt-center align-items-center">
                <a href="" className="color-white">John
                    <i className="bi bi-person-circle mar-left-5px"></i>
                    <i className="bi bi-chevron-down mar-left-5px"></i>
                </a>
                <ul className="submenu bg-color-mainblue">
                    <li className="submenu-item"><a href=""><i className="bi bi-person-circle"></i> Mi cuenta</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-cart3 color-white"></i>Compras</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-truck"></i> Envíos</a></li>
                    <li className="submenu-item"><a><i className="bi bi-receipt"></i> Facturas</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-heart"></i> Favoritos</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-gear"></i> Ajustes</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-box-arrow-right"></i> Cerrar sesión</a></li>
                </ul>
            </li>
        </ul>
        </>
    )

}