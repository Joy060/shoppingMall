import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

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

const FlexCenter = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    /* border: 1px solid black; */
`;

const Card = styled.div`
    width: 100px;
    height: 100px;
    background-color: aliceblue;
    margin: 12px;
    border: 1px solid red;
`;


const Cart = ()=>{

    return(
        <DefaultLayout>
            <Center>
                <h2>我的購物車</h2>
                    <FlexCenter>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </FlexCenter>
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