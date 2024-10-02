import {Flex, Typography} from "antd";
import {useLoaderData} from "react-router-dom";
import {ProductCards} from "./components";

export const ProductsList = () => {
    const products = useLoaderData()

    return (
        <Flex vertical gap={24}>
            <Typography.Title>
                Доступные товары
            </Typography.Title>

            <ProductCards products={products} />
        </Flex>
    )
}