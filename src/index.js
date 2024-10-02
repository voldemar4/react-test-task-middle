import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import {store, router} from "./app";
import 'antd/lib/style/reset.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)