import {Flex} from "antd";
import {ProductCard} from "./ProductCard";

export const ProductCards = ({ products }) => {

    return (
        <Flex gap={24} wrap='wrap' align='flex-start'>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </Flex>
    )
}