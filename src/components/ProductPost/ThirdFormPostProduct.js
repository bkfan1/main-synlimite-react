import React from 'react'

export function ThirdFormPostProduct(){
    return(
        <>
        <form action="" className="form-post-product-1 border-radius-rounded pad-20px border2">
            <div className="dp-flex width-100per">
                <h1 className="font-size-24px ">Confirma los datos de la publicación</h1>
            </div>

            <div className="dp-flex flex-dir-col pad-top-10px">
                <h2 className="font-size-20px font-weight-700 pad-top-10px pad-bottom-5px">Título</h2>
                <h3 className="font-weight-normal">Xiaomi Redmi Note 8</h3>
            </div>

            <div className="width-100per pad-top-20px pad-bottom-20px">
                <h1 className="font-size-20px font-weight-700">Imágenes del producto</h1>
            </div>

            <div className="dp-flex flex-dir-row flex-wrap-true width-100per justify-cnt-sb">

                <div className="form-img-container border-radius-rounded">
                    <img src="" alt="" />
                </div>

                <div className="form-img-container border-radius-rounded">
                    <img src="" alt="" />
                </div>

                <div className="form-img-container border-radius-rounded">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="dp-flex flex-dir-col width-100per mar-top-20px ">
                <h1 className="font-size-20px font-weight-700">Descripción</h1>
                <p className="post-form-description mar-top-5px">Nuevo, único dueño. Se puede negociar.</p>
            </div>

            <div className="dp-flex flex-dir-col width-100per mar-top-20px ">
                <h1 className="font-size-20px font-weight-700">Ubicación</h1>
                <p className="post-form-description mar-top-5px">Barinas, Venezuela</p>
            </div>

            <div className="dp-flex flex-dir-col width-100per mar-top-20px ">
                <h1 className="font-size-18px font-weight-700">Precio</h1>
                <span className="">9999$</span>
            </div>

            <div className="dp-flex width-100per pad-top-20px justify-cnt-sb">
                <button type="submit" className="cursor-pointer">Volver</button>
                <button type="submit" className="cursor-pointer bg-color-skyblue2 pad-10px border-radius-rounded color-white">Continuar</button>
            </div>
        </form>
        </>
    )
}