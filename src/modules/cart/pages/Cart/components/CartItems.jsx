import {Flex} from "antd";
import {useSelector} from "react-redux";
import {cartSlice} from "../../../cart.slice";
import {CartItem} from "./CartItem";

export const CartItems = () => {
    const cartItems = useSelector(cartSlice.selectors.items)

    return (
        <Flex wrap='wrap' gap={32}>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.cartId} {...cartItem} />
            ))}
        </Flex>
    )
}