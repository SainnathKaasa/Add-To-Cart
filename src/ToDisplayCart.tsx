import ProductId from "./InterfaceProduct";

const DisplayCart:React.FC<{product:ProductId}> =(prop)=>{

    const{id,thumbnail, price,description} = prop.product

    return(
        <>
        <table>
            <tr>
                
                <td className="Disp"><img src={thumbnail} alt=""  /></td>
                <td className="Disp">
                    <div className="DispChild DispChild1">Price: {price} $</div>
                    <div className="DispChild">{description}</div>
                    
                </td>
                
            </tr>
            
        </table>

        </>
    )

}
export default DisplayCart