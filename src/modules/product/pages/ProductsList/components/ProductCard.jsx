import {Card} from "antd";
import {NavLink} from "react-router-dom";
import {ProductCardImage} from "./ProductCardImage";

export const ProductCard = (props) => {
    return (
        <NavLink style={{flexBasis: '15%'}} to={`/products/${props.id}`}>
            <Card title={props.name}>
                <ProductCardImage
                    name={props.name}
                    images={props.colors[0].images}
                />
            </Card>
        </NavLink>
    )
}