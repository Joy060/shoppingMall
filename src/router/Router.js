// 使用router套件
import { Routes,Route } from 'react-router-dom';

// 各分頁導入
import Cart from "../pages/cart";
import Login from "../pages/login";
import Admin from "../pages/admin";
import SellLogin from "../pages/sell-login";
import Shopping from "../pages/shopping";
import ProductDetail from './ProductDetail';



const Router = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Shopping/>} />

                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/seller-login' element={<SellLogin/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<h2>404 找不到此頁面</h2>} />
            </Routes>

        </div>
    )

}

export default Router;