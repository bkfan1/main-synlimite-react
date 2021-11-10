
import SynlimiteLogo from "../../static/img/synlimite-logo.png"

export function ErrorView(){
    return(
        <>
        <main className="width-100per height-100vh dp-flex flex-dir-col justify-cnt-center align-items-center bg-gradient-mainblue">
            <div className="dp-flex flex-dir-col justify-cnt-center align-items-center">
                <a href="" className="mar-bottom-10px">
                    <img src={SynlimiteLogo} className="error-logo-img" alt="Logo de Synlimite" />
                </a>
                <h1 className="font-size-24px color-white">¡Úps! ha ocurrido un error.</h1>
                {/*El tipo de error se lanzará dinámicamente y será puesto en el siguiente h2:*/}
                <h2 className="mar-top-5px font-size-18px font-weight-normal color-white">Error: 000</h2>
                <button className="mar-top-10px pad-10px bg-color-white border-radius-rounded color-secondblue"><a href="">Volver al inicio <i className="bi bi-house-door"></i></a></button>
            <   button className="mar-top-10px color-skyblue border-radius-rounded"><a href="" className="font-size-14px mar-10px color-white">¿Qué significa esto?</a></button>
            </div>
        </main>
        </>
    )
}