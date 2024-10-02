import {Layout, Space} from "antd";
import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {cartSlice} from "../../modules/cart";

export const AppLayout = () => {
    const cartItemsCount = useSelector(cartSlice.selectors.count)

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout.Header style={{display: 'flex', alignItems: 'center',}}>
                <Space size={'large'}>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/cart'}>Корзина ({cartItemsCount})</NavLink>
                </Space>
            </Layout.Header>

            <Layout.Content style={{padding: 24, margin: 0,}}>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}