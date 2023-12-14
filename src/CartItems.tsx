import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import ProductId from "./InterfaceProduct";
import Productid from "./Product";
import DisplayCart from "./ToDisplayCart";

const CartItems=()=>{

    const localObj=JSON.parse(localStorage.getItem('arr')||'[]')
    const localArr:ProductId[]=[]
    const keys = Object.keys(localObj)

    keys.forEach((key)=>
    {
        localArr.push(localObj[key])
    })
    
    

    
    
   
    
    return(
        <>
        {
            localArr.map((val)=>(
                <DisplayCart product={val}/>   
            ))
        }
        
        </>
    )

}
export default CartItems
