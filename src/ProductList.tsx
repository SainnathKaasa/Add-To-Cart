import  axios  from "axios"
import { useEffect, useState } from "react"
import Productid from "./Product"
import { useNavigate } from "react-router-dom";




const AllProductList = () =>{

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


      const myList = localStorage.getItem('arr')
      const nav = useNavigate()
      function mycartDisplay(){
          nav(`/moredetail/cart`,{state:myList})
          
          
      }

    
    

    return(
        
        <div>

          <p className="buttonCart"><button onClick={mycartDisplay} >Cart Items</button></p>
      {
       
        
       
       AccessID.map((product , index)=>(
        
            <>
            <Productid key={index} ItemId={product} />
            </>
            
        ))
        }
    </div>
    )
}

export default AllProductList