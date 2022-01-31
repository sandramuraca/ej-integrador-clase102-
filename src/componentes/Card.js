import "./Card.scss"
import {useState} from "react"
import { BsFillStarFill as Star } from "react-icons/bs";
import { BsFillBasket2Fill as Basket } from "react-icons/bs";

const Card = ({title, type, price, img, isAvailable, onSale }) => {

   
 return(
    
     <div className="card">
        <div className="title-type-card">
            <h1>{title}</h1>
            <p>{type}</p>
            <Star className="icono"/>
            <Star className="icono"/>
            <Star className="icono"/>
            <Star className="icono"/>
        </div>
        
        <div className="container-price">
            <p className="price">$ {price}</p> 
            <Basket className="icono basket" />
        </div>
        
        <img src={img} className="img-card"/>
    
    </div>
    )
}

export default Card



