import { createContext, useContext, useState } from "react";

// 建立空商城
const ProductContext = createContext(null);

export  function ProductProvider({children}){

        // 控制清單狀態
        const [products, setProducts] = useState([
            { id: 1, name:'運動', count: 1 },
            { id: 3, name:'網球', count: 2 },
            { id: 4, name:'羽球', count: 1 },
            { id: 5, name:'籃球', count: 5 },
            { id: 6, name:'睡覺', count: 6 }
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