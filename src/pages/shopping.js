import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/Cartcontext";

// 頁面容器
const HomeDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
`;


// TV電視牆(區
const TVDiv = styled.div`
    width: 100%;
    background-image: url('/img/product00.jpg');
    background-size: cover;
    height: 300px;
    /* border: 1px solid black; */
    `;

// 商品容器(區
const ProDiv= styled.div`
    /* border:1px solid black; */
    display: flex;
    flex-wrap: wrap;
    margin: 100px 0;
    `;

// 商品卡片
const CardDiv =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    `;

// 圖片格式
    const Img = styled.img`
        height: 100px;
    `;

// 按鈕區
const BtnDiv = styled.div`
    display: flex;
    width: 160px;
    margin: 20px;
    justify-content: space-between;
`;



const Shopping = ()=>{

    const { products } = useProduct();
    const { addToCart} = useCart();

    return(
        <DefaultLayout>
            <HomeDiv>

                    <TVDiv>
                    </TVDiv>
                 
                    <ProDiv>
                        {
                            products.map((item)=>{
                               return   <CardDiv key={item.id}>
                                            <Img src={item.img}></Img>
                                            <p>{item.name}</p>
                                            <p>${item.price}</p>
                                            <button onClick={()=>addToCart(item)}>加入購物車</button>
                                            <Link to={`/product/${item.id}`}>more</Link>

                                        </CardDiv>
                            })
                        }
                    </ProDiv>
                 
                 
                    <BtnDiv>
                        <button>
                            <Link to="/cart">購物車</Link>
                        </button>
                        <button>
                            <Link to="/seller-login">我是賣家</Link>
                        </button>
                    </BtnDiv>

            </HomeDiv>
        </DefaultLayout>
    );
}
export default Shopping;