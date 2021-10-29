import React from 'react';

export function SecondNavLogged(){
    return(
        <>
        <ul className="dp-flex justify-cnt-se width-100per bg-color-secondblue pad-top-5px pad-bottom-5px">
            <li><a href="" className="color-white mar-left-20px mar-right-20px">Productos</a></li>
            <li className="user-nav-menu">
                <a href="" className="color-white mar-left-20px mar-right-20px">Comprar</a>
                <ul className="submenu bg-color-secondblue">
                    <li className="submenu-item"><a href=""><i className="bi bi-basket3"></i> Por peso</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-stack"></i> Al mayor</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-tag"></i> Por categorías</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-person-lines-fill"></i> Conseguir un proveedor</a></li>
                </ul>
            </li>
            
            <li className="user-nav-menu">
                <a href="" className="color-white mar-left-20px mar-right-20px">Ofertas</a>
                <ul className="submenu bg-color-secondblue">
                    <li className="submenu-item"><a href=""><i className="bi bi-percent"></i> Descuentos</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-calendar4-week"></i>Rebajas por temporadas</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-gift"></i>Regalos por compra</a></li>
                </ul>
            </li>

            <li className="user-nav-menu">
                <a href="" className="color-white mar-left-20px mar-right-20px">Vender</a>
                <ul className="submenu bg-color-secondblue">
                    <li className="submenu-item"><a href=""><i className="bi bi-basket3"></i> Por peso</a></li>
                    <li className="submenu-item"><a href=""><i className="bi bi-stack"></i>Al mayor</a></li>
                </ul>   
            </li>
            <li><a href="" className="color-white mar-left-20px mar-right-20px">Ayuda</a></li>
        </ul>
        </>
    );
        
}