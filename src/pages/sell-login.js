import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";


const BtnDiv = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
    /* border: 1px solid black; */
`;

const Center =styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    padding: 40px 0;
    height: 200px;
    line-height: 30px;
    width: 100%;
    `;

const SellLogin = ()=>{

    return(
        <DefaultLayout>
            <Center>
                <h2>我是賣家登入頁</h2>
                <div>
                    <input></input>
                </div>
                <BtnDiv>
                    <button>
                        <Link to="/admin">登入</Link>
                    </button>
                    <button>
                        <Link to="/login">我要購物</Link>
                    </button>
                </BtnDiv>
            </Center>
        </DefaultLayout>
    );
}
export default SellLogin;