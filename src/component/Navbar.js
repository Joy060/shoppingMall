import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/Cartcontext";



const NavbarDiv = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    width:100%;
    /* border: 1px solid yellow; */
`;


const Navbar = ()=>{

    const { totalCount, totalPrice }= useCart();

    return(
        <NavbarDiv>
            <span>
                <Link to="/">插畫兔官網</Link>
            </span>
            <div>
                <span>
                    <Link to="/login">登入</Link>
                </span>|
                <span>
                    <Link to="/cart">購物車:{totalCount}件商品|總計:${totalPrice}</Link>
                </span>
            </div>
        </NavbarDiv>
    );
}
export default Navbar;