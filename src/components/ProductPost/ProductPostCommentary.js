import React from 'react'
import { RateList } from '../Common/RateList'
import PersonImage from "../../static/img/person.jpg"

export function ProductPostCommentary(props){

    const commentaryPlaceHolder = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolore dignissimos error accusantium magni hic amet eveniet soluta eos reprehenderit mollitia eligendi culpa odit, consequatur, iste sed ipsum! Velit magnam minima illum consequuntur officiis incidunt adipisci nam! Eos voluptatibus repudiandae facilis dolore dolorum cumque eligendi, vel amet, sed soluta est."

    return(
        <>
        <figure className="commentary dp-flex flex-dir-col">

            <div className="dp-flex align-items-center">
                <a href="#"><img className="authorImage border-radius-circle mar-right-5px" src={props.authorImage === "" ? PersonImage : props.authorImage }></img></a>
                
                <div className="dp-flex flex-dir-col">
                    <a href="#"><span className="">{props.authorName === "" ? "Cargando autor..." : props.authorName}</span></a>
                    <RateList />
                </div>
            </div>

            <p className="mar-top-5px">{props.commentaryText === "" ? commentaryPlaceHolder : props.commentaryText}</p>

            <form className="mar-top-10px">
                <button className="font-size-14px color-lightgray cursor-pointer"><i className="bi bi-flag"></i> Reportar abuso</button>
            </form>

        </figure>
        </>
    )
}