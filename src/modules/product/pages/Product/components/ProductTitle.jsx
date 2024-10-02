import {Typography} from "antd";
import {useSelector} from "react-redux";
import {productSlice} from "../../../product.slice";

export const ProductTitle = () => {
    const name = useSelector(productSlice.selectors.name)
    const price = useSelector(productSlice.selectors.price)

    return (
        <Typography.Title>
            {name} ({price})₽
        </Typography.Title>
    )
}