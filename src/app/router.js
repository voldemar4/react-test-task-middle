import {createBrowserRouter} from "react-router-dom";
import {productRoute, productsListRoute} from "../modules/product";
import {cartRoute} from "../modules/cart";
import {AppLayout} from "../shared";


export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            productsListRoute,
            productRoute,
            cartRoute
        ]
    }
])