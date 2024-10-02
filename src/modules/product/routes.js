import {store} from "../../app/store";
import * as api from '../../shared/api'
import {Product, ProductsList} from "./pages";
import {fetchProduct} from "./product.slice";

export const productsListRoute = {
    path: "/",
    element: <ProductsList />,
    loader: async () => {
        return api.getProducts()
    }
}

export const productRoute = {
    path: "/products/:id",
    element: <Product />,
    loader: async ({ params }) => {
        return store.dispatch(fetchProduct(Number(params.id)))
    }
}
