import {useState} from "react";
import s from './ProductCardImage.module.css'


export const ProductCardImage = ({ name, images }) => {
    const [activeImageIdx, setActiveImageIdx] = useState(0)

    const onVirtualImageMouseEnter = (idx) => {
        setActiveImageIdx(idx)
    }

    const onMouseLeave = () => {
        setActiveImageIdx(0)
    }

    return (
        <div onMouseLeave={onMouseLeave} className={s.wrapper}>
            <div className={s.virtualContainer}>
                {images.map((image, idx) => (
                    <div
                        onMouseEnter={() => onVirtualImageMouseEnter(idx)}
                        key={image}
                        className={
                            `${s.virtualImage} ${idx === activeImageIdx ? s.active : ''}`
                        }
                    />
                ))}
            </div>

            <div className={s.imageContainer}>
                <img
                    className={s.image}
                    src={images[activeImageIdx]}
                    alt={name}
                />
            </div>
        </div>
    )
}