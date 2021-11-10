import React from 'react';

export function Footer(){
    return(
        <>
        <footer className="footer dp-flex justify-cnt-sb bg-color-white">
            <ul>
                <li className="font-size-16px mar-bottom-5px font-weight-bold color-dedeegray">Synlimite Ecommerce, C.A</li>
                <li className="font-size-14px">2021 - 20XX</li>
                <li className="font-size-14px mar-top-5px"><i className="bi bi-geo-alt font-size-14px"></i> Barinas - Venezuela</li>
                
                <li className="mar-top-10px">
                    <ul className="dp-flex">
                        <li className="mar-right-10px"><a href=""><i className="bi bi-facebook"></i></a></li>
                        <li className="mar-right-10px"><a href=""><i className="bi bi-instagram"></i></a></li>
                        <li className="mar-right-10px"><a href=""><i className="bi bi-twitter"></i></a></li>
                        <li className="mar-right-10px"><a href=""><i className="bi bi-github"></i></a></li>
                    </ul>
                </li>
            </ul>
            
            <ul className="">
                <li className="mar-bottom-5px font-size-16px font-weight-bold">Legalidad</li>
                <li className="mar-bottom-5px"><a href="">Términos y condiciones</a></li>
                <li className="mar-bottom-5px"><a href="">Política de Privacidad</a></li>
                <li className="mar-bottom-5px"><a href="">Soporte al cliente</a></li>
                <li className="mar-bottom-5px"><a href="">Política de reembolsos</a></li>
            </ul>

            <ul className="">
                <li className="mar-bottom-5px font-size-16px font-weight-bold">Acerca de la empresa</li>
                <li className="mar-bottom-5px"><a href="">¿Qué es Synlimite?</a></li>
                <li className="mar-bottom-5px"><a href="">El equipo</a></li>
                <li className="mar-bottom-5px"><a href="">Comunidad</a></li>
                <li className="mar-bottom-5px"><a href="">Nuestra misión y objetivos</a></li>
                <li className="mar-bottom-5px"><a href="">Trabaja con Synlimite</a></li>
            </ul>
        </footer>
        </>
    )
}