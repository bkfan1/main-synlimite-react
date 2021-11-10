import React from 'react'
import { UserPanelAvatar } from '../UserSettings/UserPanelAvatar'
import { UserPanelUserInfo } from '../UserSettings/UserPanelUserInfo'


export function UserPanel(){
    return(
        <>
        <aside className="panel dp-flex flex-dir-col flex-wrap-true sidebar-width min-height-100vh  bg-color-white">
        {/*<!--START OF PANEL HEADER-->*/}
            <header className="panel-header dp-flex flex-dir-col justify-cnt-center width-100per">
                <UserPanelUserInfo />
            </header>
        {/*<!--END OF PANEL HEADER-->*/}

        {/*<!--START OF PANEL BODY-->*/}
            <div className="panel-body width-100per">

                <div className="panel-section-title width-100per pad-top-15px border-top-gray ">
                    <h5 className="panel-section-title pad-left-15px font-size-14px color-black">PRINCIPAL</h5>
                </div>

                <section className="dp-flex flex-dir-col">

                    <header className="dp-flex align-items-center pad-left-15px pad-top-20px">
                        <h1 className="font-size-18px font-weight-normal"><i className="bi bi-bag"></i> Compras </h1>
                        <button className="mar-left-5px"><i className="bi bi-chevron-down"></i></button>
                    </header>

                    <ul className="purchases-list pad-left-15px mar-bottom-20px pad-top-10px">
                        <li className="mar-left-20px"><a href="">Mis compras</a></li>
                        <li className="mar-top-5px mar-left-20px mar-bottom-5px"><a href="" >Devoluciones</a></li>
                        <li className="mar-left-20px"><a href="">Solicitar devolución</a></li>
                    </ul>
                </section>

                <section>
                    <header className="dp-flex align-items-center pad-left-15px pad-top-20px mar-bottom-10px">
                        <h1 className="font-size-18px font-weight-normal"><i className="bi bi-cart-check"></i> Ventas</h1>
                        <button className="mar-left-5px"><i className="bi bi-chevron-down"></i></button>
                    </header>

                    <ul className="posts-list pad-left-15px mar-bottom-15px">
                        <li className="mar-left-20px"><a href="">Resumen</a></li>
                        <li className="mar-top-5px mar-left-20px mar-bottom-5px"><a href="" >Publicaciones</a></li>
                    </ul>
                </section>

                <section>
                    <header className="dp-flex align-items-center pad-left-15px pad-top-15px mar-bottom-10px">
                        <h1 className="font-size-18px font-weight-normal"><i className="bi bi-gear"></i> Configuración</h1>
                    </header>
                    <ul className="settings-list pad-left-15px">
                        <li className="mar-left-20px"><a href="">Ajustes de cuenta</a></li>
                    </ul>
                </section> 
            </div>


        </aside>
    
        </>
    )
}