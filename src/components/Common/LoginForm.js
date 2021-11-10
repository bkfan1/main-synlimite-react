import React from 'react'

export function LoginForm(){
    return(
        <>
        <form action="" className="login-form align-self-center dp-flex flex-dir-col justify-cnt-center align-items-center bg-color-white border-radius-rounded">
            <div className="dp-flex flex-dir-col width-100per">
                <div className="dp-flex width-100per">
                    <h1 className="font-size-28px">Iniciar sesión</h1>
                </div>
                
                <div className="dp-flex flex-dir-col width-100per pad-top-15px">
                    <label className="pad-bottom-5px">E-mail o usuario</label>
                    <input type="text" name="" required id="" placeholder="johndoe@mail.com" className="input-form border-radius-rounded" />
                </div>
                
                <div className="dp-flex flex-dir-col width-100per pad-top-15px ">
                    <label className="pad-bottom-5px">Contraseña</label>
                    <input type="password" name="" id="" required className="input-form border-radius-rounded" />
                </div>
            </div>

            <div className="width-100per pad-top-5px">
                <button type="submit" className="bg-color-skyblue2 cursor-pointer color-white width-100per mar-top-10px mar-bottom-10px pad-10px border-radius-rounded">Iniciar sesión</button>
            </div>
        
            <div className="dp-flex flex-dir-col justify-cnt-center align-items-center width-100per mar-top-20px">
                <a href="" className="font-size-14px color-skyblue mar-bottom-10px">¿Has olvidado la contraseña?</a>
                <a href="" className="font-size-14px color-skyblue">Crear cuenta</a>
            </div>
        </form>
        </>
    )
}