

import { Link, Route, Router, Routes, useNavigate } from "react-router-dom"
import ProductId from "./InterfaceProduct"
import Details from "./ProductDetails"
import AllDetails from "./AllDetails"





const Productid: React.FC<{ ItemId: ProductId }> = (props) => {

    const Navigate = useNavigate();

    const { brand, thumbnail, id, description, title, rating, price } = props.ItemId

    function myfun() {
        Navigate(`/full-info`, { state: id })
    }

    // localStorage.setItem("arr", JSON.stringify([]))

    // const arr = []
    let bol=true
    function myCart( ) {

        // const cart = arr
        const cart = JSON.parse(localStorage.getItem('arr') || '[]')


        // localStorage.setItem("arr", JSON.stringify(arr))


        const keys=Object.keys(cart)
        keys.forEach((key)=>
        {
            const localObj=cart[key as keyof typeof cart]
            if(props.ItemId.id===localObj.id)
            {
                bol=false

            }
        })

        if(bol)
        {
            cart.push(props.ItemId)
        }
        

        // cart.push(props.ItemId)
        

        // console.log(localStorage.setItem("arr", JSON.stringify(arr)));

        localStorage.setItem('arr', JSON.stringify(cart))
        // arr = cart

    }



    return (
        <>
            <table>

                <thead>
                    <tr>
                        <td className="picture">
                            <img src={thumbnail} alt="" height={100} width={100} />
                        </td>
                        <td className="button1">
                            <button onClick={myfun}>product {brand} , id {id} (click for more details)</button>
                        </td>
                        <td className="button2">
                            <button onClick={myCart}>Add to cart</button>
                        </td>



                    </tr>
                </thead>
            </table>
        </>
    )
}
// ()=>{navigator('/moredetail/'{id})}
export default Productid