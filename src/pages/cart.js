import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";
import { useCart } from "../context/Cartcontext";

const BtnDiv = styled.div`
    display: flex;
    width: 180px;
    justify-content: space-between;
`;

const Btn = styled.button`
    width: 20px;
    height: 20px;
    display: inline;
`;

const Center =styled.div`
    width: 80%;
    padding: 40px 0 ;
    display: flex;
    margin: 50px auto ;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    border: 1px solid black;
    `;

// 商品卡片
const CardDiv =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    width: 350px;
    border: 0.25px solid black;
    `;

// 圖片格式
const Img = styled.img`
    width: 40px;
`;


const Cart = ()=>{

    const {cart, totalCount, totalPrice, addToCart, deletefromCart,decreaseCart,clearCart} = useCart();
    
    return(
        <DefaultLayout>
            <Center>
                <h2>我的購物車</h2>
                    {
                        cart.map((item)=>{
                            return (
                                <CardDiv key={item.id}>
                                        <Img src={item.img}></Img>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div>
                                        <Btn onClick={()=>decreaseCart(item.id, -1)}>-</Btn>
                                        <span>{item.count}</span>
                                        <Btn onClick={()=>addToCart(item)}>+</Btn>
                                    </div>
                                    <button onClick={()=>deletefromCart(item.id)}>刪除</button>
                                </CardDiv>

                            )
                        })
                    }
                
                <button onClick={()=>clearCart()}>清空購物車</button>

                <h2>總金額</h2>
                <p>總共{totalCount}件</p>
                <p>總共{totalPrice}元</p>
                
                <BtnDiv>
                    <button>
                        <Link to="/">回到商店</Link>
                    </button>
                    <button>
                        <Link to="/">我要結帳</Link>
                    </button>
                </BtnDiv>
            </Center>
        </DefaultLayout>
    );
}
export default Cart;