import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/Cartcontext";
import DefaultLayout from "../layout/DefaultLayout";





// 商品卡片
const DetailDiv =styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    `;

// 商品卡片
const CardDiv =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    `;

// 圖片格式
    const Img = styled.img`
        width: 40vw;
    `;

const ProductDetail = () => {

    const { products } = useProduct();
    const { addToCart} = useCart();
    
    
    const {id} = useParams();

    const product = products.find((item)=> item.id === Number(id));

    if(!product){
        return <h2>找不到該商品</h2>
    }

    return(
        <DefaultLayout>
                <DetailDiv>
                    <CardDiv key={product.id}>
                        <Img src={product.img}></Img>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={()=>addToCart(product)}>加入購物車</button>
                    </CardDiv>
                </DetailDiv>
        </DefaultLayout>

    )
}

export default ProductDetail;