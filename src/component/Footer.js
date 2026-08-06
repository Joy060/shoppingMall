import styled from "styled-components";

const FooterDiv = styled.div`
    width:100%;
    height: 20px;
    background-color: ${props => props.theme.secColor};
    /* border: 1px solid red; */
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
`;



const Footer = ()=>{

    return(
        <FooterDiv>
                <h2>版權所有</h2>
        </FooterDiv>
    );
}
export default Footer;