import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    
    padding: 20px;
    height: 100px;

    background-color: ${props => props.theme.thirdColor};
    /* border: 1px solid red; */
`;



const Header = ()=>{

    return(
            <HeaderDiv>
                <Navbar />
            </HeaderDiv>
    );
}
export default Header;