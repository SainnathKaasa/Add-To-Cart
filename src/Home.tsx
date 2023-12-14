import { useNavigate } from "react-router-dom"

const Home=()=>
{
    const Navigate=useNavigate()

    const handleClick=()=>
    {
            Navigate(`/moredetail`)
    }
    return(
       <p className="Homepage"> <button onClick={handleClick} >CheckOut our store</button></p>
    )
}

export default Home