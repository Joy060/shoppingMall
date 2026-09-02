import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/Cartcontext";

const HomeDiv = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
`;

const BtnDiv = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
`;


const ExerciseDiv= styled.div`
    border:1px solid black;
`;

const Shopping = ()=>{

    const { products } = useProduct();
    const { cart,addToCart} = useCart();

    return(
        <DefaultLayout>
            <HomeDiv>


                    <h2>歡迎光臨兔兔店</h2>
                 
                    <ExerciseDiv>
                        {
                            products.map((item)=>{
                               return   <li key={item.id}>
                                            {item.name}(數量{item.count})
                                            <button onClick={()=>addToCart(item)}>加入購物車</button>

                                        </li>
                            })
                        }
                    </ExerciseDiv>
                    {
                        cart.map((item)=>{
                            return <li key={item.id}>
                                    {item.name}(數量{item.count})

                            </li>
                        })
                    }
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