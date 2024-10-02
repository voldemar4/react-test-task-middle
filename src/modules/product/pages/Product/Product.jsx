import {Flex} from "antd";
import {AddToCartButton, ColorPicker, ImageViewer, ProductTitle, SizePicker} from "./components";

export const Product = () => {
    return (
        <>
            <ProductTitle />

            <Flex gap={64}>
                <ImageViewer />

                <Flex vertical gap={32}>
                    <ColorPicker />
                    <SizePicker />
                    <AddToCartButton />
                </Flex>
            </Flex>
        </>
    )
}