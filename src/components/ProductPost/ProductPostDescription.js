import React from 'react'

export function ProductPostDescription(props){

    const descriptionPlaceHolder = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, facilis, dolorem veritatis quisquam debitis placeat mollitia dolores sequi illum similique dignissimos minus velit aliquam praesentium, voluptatibus quae necessitatibus impedit porro dolor tenetur soluta quis. Quasi, iste? Animi, voluptatum temporibus? Porro mollitia sint asperiores corporis commodi exercitationem pariatur nisi laboriosam itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, magnam fugit. Deserunt odit debitis, soluta suscipit inventore corrupti, ad, iste quod qui consectetur iusto? Eaque libero unde quaerat velit et repellat quo dolores quas sint vitae, alias iusto placeat nobis qui fuga culpa officiis quasi animi repudiandae aspernatur ducimus. Minima! Animi, voluptatum temporibus? Porro mollitia sint asperiores corporis commodi exercitationem pariatur nisi laboriosam itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, magnam fugit. Deserunt odit debitis, soluta suscipit inventore corrupti, ad, iste quod qui consectetur iusto? Eaque libero unde quaerat velit et repellat quo dolores quas sint vitae, alias iusto placeat nobis qui fuga culpa officiis quasi animi repudiandae aspernatur ducimus. Minima! Animi, voluptatum temporibus? Porro mollitia sint asperiores corporis commodi exercitationem pariatur nisi laboriosam itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, magnam fugit. Deserunt odit debitis, soluta suscipit inventore corrupti, ad, iste quod qui consectetur iusto? Eaque libero unde quaerat velit et repellat quo dolores quas sint vitae, alias iusto placeat nobis qui fuga culpa officiis quasi animi repudiandae aspernatur ducimus."

    return(
        <>
        <section className="product-description-container dp-flex flex-dir-col width-100per pad-20px bg-color-white">
            <h2 className="font-size-28px mar-bottom-10px">Descripción</h2>
            <div className="product-description">
                <p>{props.descriptionText === "" ? descriptionPlaceHolder : props.descriptionText}</p>
            </div>
        </section>
        </>
    )

}