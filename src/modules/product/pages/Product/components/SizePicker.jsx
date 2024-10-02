import {Button, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {productSlice} from "../../../product.slice";

export const SizePicker = () => {
    const sizes = useSelector(productSlice.selectors.sizes)
    const activeSize = useSelector(productSlice.selectors.activeSize)
    const dispatch = useDispatch()

    const onSizePick = (sizeId) => {
        dispatch(productSlice.actions.setSizeIdx(sizeId))
    }

    return (
        <Space>
            <b>Выберите размер</b>

            <Space size='small'>
                {sizes.map(size => (
                    <Button
                        onClick={() => onSizePick(size.id)}
                        type={activeSize === size.id ? 'primary' : "default"}
                        disabled={size.disabled}
                        key={size.id}
                    >
                        {size.label}
                    </Button>
                ))}
            </Space>
        </Space>
    )
}