import { useEffect, useState } from "react";
import ProductId from "./InterfaceProduct"
import axios from "axios";
import Productid from "./Product";
import Productids from "./AllDetails";
import { useLocation } from "react-router-dom";



const Details = ()=>{

    const [AccessID , setAccessID] = useState([]);
    const url='https://dummyjson.com/products'
    useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            setAccessID(response.data.products);
          })
          .catch((error) => {
            console.log("error is : ", error);
          });
      }, []);

      const location = useLocation()

    return(
        <>
        <div>
      {
       
       AccessID.map((product , index)=>(
        
            <>
            <Productids key={index} ItemId={product}/>
            </>
            
        ))
        }
    </div>
        
        
        </>
    )

    
}
export default Details