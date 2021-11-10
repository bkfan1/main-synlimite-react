import React from 'react'

export function SecondFormPostProduct(){
    return(
        <>
        <form action="" className="form-post-product-1 border-radius-rounded pad-20px mar-top-20px border2 ">
            <div className="dp-flex flex-dir-col width-100per">
                <h1 className="font-size-22px font-weight-normal"><i class="bi bi-images font-size-22px"></i> Sube imágenes del producto </h1>
                <input type="file" name="" id="" className="input-file mar-top-20px" />
            </div>
            
            <div className="dp-flex justify-cnt-sb flex-wrap-true width-100per">
                {/*Cuando se haya cargado una imagen, se debe insertar en uno de estos contenedores, esto con la finalidad de generar
                una preview que al hacerle click abre una ventana modal con la foto*/}

                {/*PD: El contenedor está preparado para que se agreguen más previews, pero, de ser posible, intentar que sea una especie de slider para ahorrar espacio*/}
                <div className="form-img-container border-radius-rounded">
                    <img src="" alt=""/>
                </div>

                <div className="form-img-container border-radius-rounded">
                    <img src="" alt=""/>
                </div>
            
                <div className="form-img-container border-radius-rounded">
                    <img src="" alt=""/>
                </div>
            </div>

            <div className="width-100per mar-top-10px">
                <span className="font-size-14px color-gray">AVISO: Se necesitan subir al menos 3 imágenes del producto.</span>
            </div>
            
            <div className="dp-flex width-100per pad-top-20px justify-cnt-sb">
                <button type="submit" className="cursor-pointer">Atrás</button>
                <button type="submit" className="cursor-pointer bg-color-skyblue2 pad-10px border-radius-rounded color-white">Continuar</button>
            </div>
        </form>

        </>
    )
}