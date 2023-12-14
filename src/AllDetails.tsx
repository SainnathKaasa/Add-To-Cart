


import { useLocation, useNavigate } from "react-router-dom"
import ProductId from "./InterfaceProduct"
import Details from "./ProductDetails"



const Productids:React.FC<{ItemId : ProductId}> = (props) => {

    const{title,
        description,
        discountPercentage,
        category,id,images} = props.ItemId

    

    const loc = useLocation()
    console.log(loc.state);
    
    

    console.log(loc.state)

    if(loc.state === id){
        return(
            <>
            <table>
                
                <tbody className="detailsofblock" >
                    <tr className="detailsofblockChild">
                        <td>{title}</td>
                    </tr>
                    <tr className="detailsofblockChild">
                        <td>{description}</td>
                    </tr>
                    <tr className="detailsofblockChild">
                        <td>{discountPercentage}</td>
                    </tr>
                    <tr className="detailsofblockChild">
                        <td>{category}</td>
                    </tr>
                    <tr className="detailsofblockChild">
                        
                            {
                                images.map((image)=>{
                                   return(
                                    <img src={image} alt=""  height={150} width={150} />
                                   )
                                })
                        }
                    </tr>
                </tbody>
            </table>
            </>
        )
    }

    
} 

export default Productids