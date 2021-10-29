import React from 'react'


export function ReasonsSection(){
    return(
        <>
        <section className="reasons-home-section dp-flex flex-dir-col width-100per pad-50px bg-gradient-mainblue">
            <h1 className="reasons-home-title align-self-center pad-bottom-20px color-white">Acerca de Synlimite</h1>
            <div className="reasons-cont width-100per dp-flex justify-cnt-sb">
                <figure className="home-reasons-card dp-flex align-items-center flex-dir-col justify-cnt-sb pad-15px bg-color-white border-radius-rounded box-shadow1">
                    <i className="fas fa-users home-reasons-icon color-secondblue"></i>
                    <h1 className="home-reasons-title text-align-center  ">¿Quiénes somos?</h1>
                    <p className="text-align-justify pad-bottom-20px">Somos un servicio de comercio online nacido en Venezuela. Nos dedicamos a la venta de productos de otras marcas, ofreciendo a las personas comprar productos dentro de la plataforma con el uso de criptomonedas. <a href="" className="color-skyblue">Conoce al equipo</a></p>
                </figure>

                <figure className="home-reasons-card dp-flex align-items-center flex-dir-col justify-cnt-sb pad-15px bg-color-white border-radius-rounded box-shadow1">
                    <i className="fas fa-bullseye home-reasons-icon color-secondblue mar-bottom-15px"></i>
                    <h1 className="home-reasons-title text-align-center">Nuestra misión</h1>
                    <p className="mar-top-10px text-align-justify">
                        Generar confianza y satisfacción a nuestros clientes. Seremos intermediarios en el proceso de compra y venta. Nuestro servicio estará disponible tanto para pequeñas como grandes empresas que podrán utilizar el mercado como un medio de ventas. <a href="" className="color-skyblue">Ayúdanos a mejorar.</a>
                    </p>
                </figure>

                <figure className="home-reasons-card dp-flex align-items-center flex-dir-col justify-cnt-sb pad-15px bg-color-white border-radius-rounded box-shadow1">
                    <i className="far fa-handshake home-reasons-icon color-secondblue"></i>
                    <h1 className="home-reasons-title text-align-center">Vende con nosotros</h1>

                    <p className="pad-bottom-20px text-align-justify">Synlimite hace el gran esfuerzo para que tus productos se vendan de manera rápida a través de las campañas de marketing utilizadas para la promoción de nuestros servicios. <a href="" className="color-skyblue">Saber más</a></p>
                </figure>
            </div>
        </section>
        </>
    )
}