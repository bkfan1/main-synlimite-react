import React from 'react'

export function RegisterForm(){
    return(
        <>
        <form action="" className="register-form flex-dir-col align-self-center dp-flex bg-color-white border-radius-rounded">
            <div className="dp-flex width-100per mar-bottom-15px">
                <h1 className="font-size-26px">Completa tus datos</h1>
            </div>
            
            <div className="dp-flex justify-cnt-sb width-100per mar-bottom-10px">
                <div className="dp-flex flex-dir-col">
                    <div className="dp-flex flex-dir-col">
                        <label className="mar-bottom-5px">Nombre</label>
                        <input type="text" name="" id="" className="input-form border-radius-rounded" placeholder="John" />
                    </div>
                    
                    <div className="dp-flex flex-dir-col">
                        <label className="mar-top-15px mar-bottom-5px">Documento de Identidad</label>
                        <input type="number" name="" id="" placeholder="30.389.058" className="input-form border-radius-rounded" />
                    </div>

                    <div className="dp-flex flex-dir-col">
                        <label className="mar-top-15px mar-bottom-5px">Usuario</label>
                        <input type="text" name="" id="" className="input-form border-radius-rounded" placeholder="" />
                    </div>
                </div>
    
                <div className="dp-flex flex-dir-col">
    
                    <div className="dp-flex flex-dir-col">
                        <label className="mar-bottom-5px">Apellido</label>
                        <input type="text" name="" id="" className="input-form border-radius-rounded" placeholder="Doe" />
                    </div>

                    <div className="dp-flex flex-dir-col">
                        <label className="mar-top-15px mar-bottom-5px">Email</label>
                        <input type="email" name="" id="" className="input-form border-radius-rounded" placeholder="john@doe.com" />
                    </div>
    
                    <div className="dp-flex flex-dir-col">
                        <label className="mar-top-15px mar-bottom-5px">Contraseña</label>
                        <input type="password" name="" id="" className="input-form border-radius-rounded" />
                    </div>
                </div>
            </div>

            <div className="dp-flex width-100per mar-top-10px">
                <input type="checkbox" name="" id="" />
                <span className="font-size-14px mar-left-15px">Declaro que soy mayor de edad, acepto los Términos y Condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.</span>
            </div>

            <div className="dp-flex justify-cnt-sb align-items-center width-100per mar-top-10px">
                <a href="">Cancelar</a>
                <button type="submit" className="bg-color-skyblue2 cursor-pointer color-white pad-10px border-radius-rounded">Crear cuenta</button>
            </div>

        </form>
        </>
    )
}