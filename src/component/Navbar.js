import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/Cartcontext";



const NavbarDiv = styled.div`
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    display: flex;
    width:100%;
    /* border: 1px solid yellow; */
`;

const BtnDiv = styled.span`
    margin: 0 10px;
`;


const Navbar = ()=>{

    const { totalCount, totalPrice }= useCart();

    return(
        <NavbarDiv>
            <span>
                <Link to="/">插畫兔官網</Link>
            </span>
            <div>
                <BtnDiv>
                    <Link to="/login">登入 </Link>
                </BtnDiv>
                <BtnDiv>
                    <Link to="/cart">購物車:{totalCount}件商品 | 總計:${totalPrice}</Link>
                </BtnDiv>
            </div>
        </NavbarDiv>
    );
}
export default Navbar;