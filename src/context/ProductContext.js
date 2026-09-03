import { createContext, useContext, useState } from "react";

// 建立空商城
const ProductContext = createContext(null);

export  function ProductProvider({children}){

        // 控制清單狀態
        const [products, setProducts] = useState([
            { id: 1, name:'盲盒', img:'/img/productA.webp',count: 1 ,price:50},
            { id: 3, name:'卡夾',img:'/img/productB.webp', count: 2 ,price:80},
            { id: 4, name:'吊飾',img:'/img/productC.webp', count: 1 ,price:500},
            { id: 5, name:'紅包袋',img:'/img/productD.webp', count: 5 ,price:100},
            { id: 6, name:'12吋坐姿娃娃', img:'/img/productE.jpg',count: 6 ,price:250}
        ]);

        // 控制輸入框狀態
        // const [inputText, setInputText] = useState('');

        // 新增按鈕函式
        const  handlePAdd = (name,count) =>{
            if(!name.trim() || count<=0) return;

            // 創建一個新增任務元件
            const newProduct = {
                id: Date.now(),
                name: name,
                count: Number(count),
            };

            setProducts([...products,newProduct]);
        } 

        // 刪除按鈕函式
        const handlePDelete = (targetId)=>{
            const newProducts = products.filter((item)=>item.id !== targetId);
            setProducts(newProducts);
        }

        return(
            <ProductContext.Provider value={{ products ,handlePAdd,handlePDelete}}>
                {children}
            </ProductContext.Provider>
        );

}

export function useProduct(){
    const content = useContext(ProductContext);

    if(!content){
        throw new Error('useProduct必須在ProductProvider內使用');
    }

    return content;
}