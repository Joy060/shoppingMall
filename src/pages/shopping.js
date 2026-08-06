import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

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


const Shopping = ()=>{

    return(
        <DefaultLayout>
            <HomeDiv>
                    <h2>歡迎光臨兔兔店</h2>
                    <div>
                        <input></input>
                    </div>
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