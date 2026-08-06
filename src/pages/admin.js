import { Link } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";

const Center =styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
    `;

const Admin = ()=>{

    return(
        <DefaultLayout>
            <Center>
                <h2>上架商品中</h2>
                <input></input>
                    <button>
                        <Link to="/">回到商店</Link>
                    </button>
            </Center>
        </DefaultLayout>
    );
}

export default Admin;