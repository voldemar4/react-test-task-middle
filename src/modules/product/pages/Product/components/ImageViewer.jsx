import {Button, Flex, Image} from "antd";
import {useSelector} from "react-redux";
import {productSlice} from "../../../product.slice";
import {useState} from "react";

export const ImageViewer = ({ name }) => {
    const [activeImageIdx, setActiveImageIdx] = useState(0)
    const images = useSelector(productSlice.selectors.activeColorImages)

    const onChangeActiveImage = (idxStep) => setActiveImageIdx(prev => {
        if (prev + idxStep >= images.length) return 0;
        if (prev + idxStep < 0) return images.length - 1
        return prev + idxStep
    })

    return (
        <Flex style={{width: 460, height: 460}} vertical>
            <Image
                style={{ objectFit: 'cover' }}
                src={images[activeImageIdx]} alt={name}
            />

            <Flex justify='stretch'>
                <Button onClick={() => onChangeActiveImage(-1)} style={{flex: 1}}>Назад</Button>
                <Button onClick={() => onChangeActiveImage(1)} style={{flex: 1}}>Вперёд</Button>
            </Flex>
        </Flex>
    )
}