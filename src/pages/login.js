import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

const BtnDiv = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
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

const Login = ()=>{

    return(
        <DefaultLayout>
            <Center>
                <h2>我是會員登入頁</h2>
                <div>
                    <input></input>
                </div>
                <BtnDiv>
                    <button>
                        <Link to="/">登入</Link>
                    </button>
                    <button>
                        <Link to="/seller-login">我是賣家</Link>
                    </button>
                </BtnDiv>
            </Center>
        </DefaultLayout>
    );
}

export default Login;