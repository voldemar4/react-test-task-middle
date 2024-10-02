import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {productSlice} from "../../../product.slice";
import {cartSlice} from "../../../../cart";

export const AddToCartButton = () => {
    const cartItemsCount = useSelector(cartSlice.selectors.count)
    const productId = useSelector(productSlice.selectors.id)
    const name = useSelector(productSlice.selectors.name)
    const activeColor = useSelector(productSlice.selectors.activeColor)
    const sizeId = useSelector(productSlice.selectors.activeSize)
    const canAddToCart = useSelector(productSlice.selectors.canAddToCart)

    const dispatch = useDispatch()

    const addProductToCart = () => {
        dispatch(cartSlice.actions.addItem({
            cartId: `${productId}-${activeColor.id}-${sizeId}-${cartItemsCount}`,
            id: productId,
            name,
            sizeId,
            color: activeColor
        }))
    }

    return (
        <Button onClick={addProductToCart} disabled={!canAddToCart} size={'large'}>
            Добавить в корзину
        </Button>
    )
}