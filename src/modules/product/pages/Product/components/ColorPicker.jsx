import {Segmented, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {productSlice} from "../../../product.slice";

export const ColorPicker = () => {
    const activeColorName = useSelector(productSlice.selectors.activeColorName)
    const colorsNames = useSelector(productSlice.selectors.colorsNames)
    const dispatch = useDispatch()

    const onColorChange = (data) => {
        dispatch(productSlice.actions.setColorIdx(
            colorsNames.findIndex(name => name === data)
        ))
    }

    return (
        <Space>
            <b>Выберите цвет</b>

            <Segmented
                value={activeColorName}
                options={colorsNames}
                onChange={onColorChange}
            />
        </Space>
    )
}