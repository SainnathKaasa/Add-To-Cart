// import { createBrowserRouter } from "react-router-dom";


import { createBrowserRouter } from "react-router-dom";

import AllProductList from "./ProductList";
import Details from "./ProductDetails";

import App from "./App";
import Home from "./Home";
import CartItems from "./CartItems";


const AppRoute =createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },

                {

                    index:true,
                    path:'/moredetail',
                    element:<AllProductList/>
                }
                ,
                {
                    path:`/full-info`,
                    index:true,
                    element:<Details/>
                },
                {
                    path:'/moredetail/cart',
                    index:true,
                    element:<CartItems/>
                
                }
            ]
            

        }

    ]
)

export default AppRoute