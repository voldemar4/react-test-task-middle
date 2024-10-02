import {Button, Card, Image} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {productSlice} from "../../../../product/product.slice";
import {cartSlice} from "../../../cart.slice";

export const CartItem = (props) => {
    const availableSizes = useSelector(productSlice.selectors.availableSizes)
    const sizeLabel =  availableSizes.find(size => size.id === props.sizeId).label

    const dispatch = useDispatch()

    const fullProductName = `
        ${props.name} 
        (${sizeLabel} ${props.color.name}) 
        ${props.color.price}
    `

    const onRemoveFromCardClick = () => {
        dispatch(cartSlice.actions.deleteItem(props.cartId))
    }

    return (
        <Card
            style={{
                flexBasis: '15%'
            }}
            title={fullProductName}
            cover={
                <Image
                    src={props.color.images[0]}
                    alt={fullProductName}
                />
            }
        >
            <Button
                onClick={onRemoveFromCardClick}
                size='large'
                style={{width: '100%'}}
                danger
            >
                Удалить
            </Button>
        </Card>
    )
}