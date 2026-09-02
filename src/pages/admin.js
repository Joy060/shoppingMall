import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProduct } from "../context/ProductContext";
import { useState } from "react";


const Center =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    margin: 100px 0;
    width: 100%;
    line-height: 50px;
    `;


const ListDiv=styled.div`
    line-height: 10px;
`;

const Admin = ()=>{

    // 匯入共用資料
    const { products,handlePAdd,handlePDelete } = useProduct();
    
    // 控制輸入框2個: 輸入名稱、數量
    const [inputName,setInputName]=useState("");
    const [inputCount,setInputCount]=useState(1);

    // 新增商品按鈕
    const onAddClick = () =>{
        handlePAdd(inputName,inputCount);

        setInputName("");
        setInputCount(1);
    };

    return(
    <Center>
        <h2>上架商品中</h2>
        <label>
            <input type="text" placeholder="商品名稱" value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
        </label>
        <label>
            <input type="number" min='1' value={inputCount} onChange={(e)=>setInputCount(e.target.value)}/>
        </label>
        <button onClick={onAddClick}>新增商品</button>
        <br />

        <ListDiv>
        {
            products.map((item)=>{
                return  <li key={item.id}>
                            {item.name}(數量{item.count}){""}
                            <button onClick={()=>handlePDelete(item.id)}>刪除</button>
                        </li>
            })
        }
        </ListDiv>

        <br />

        <button>
                    <Link to="/">回到商店</Link>
        </button>
    </Center>
);

    
    
}

export default Admin;