import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";
import { useCart } from "../context/Cartcontext";

const BtnDiv = styled.div`
    display: flex;
    width: 180px;
    justify-content: space-between;
`;

const Center =styled.div`
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
    `;

// const FlexCenter = styled.div`
//     display: flex;
//     width: 300px;
//     justify-content: space-between;
//     /* border: 1px solid black; */
// `;

// const Card = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: aliceblue;
//     margin: 12px;
//     border: 1px solid red;
// `;


const Cart = ()=>{

    const {cart, totalCount, totalPrice} = useCart();
    
    return(
        <DefaultLayout>
            <Center>
                <h2>我的購物車</h2>
                    {
                        cart.map((item)=>{
                            return <li key={item.id}>
                                    {item.name}(數量{item.count})

                            </li>
                        })
                    }

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