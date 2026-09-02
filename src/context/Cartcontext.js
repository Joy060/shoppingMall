import { createContext, useContext, useState } from "react";

// 建立空購物車
const CartContext = createContext(null);

export function CartProvider({ children }){
    const [cart , setCart]= useState([]);

    // 新增商品到購物車
    const addToCart = (product)=>{
        setCart((prevCart)=>{
            const existingItem = prevCart.find((item)=>item.id===product.id);
            if(existingItem){
                // 若已存在，數量+1
                return prevCart.map((item)=>
                    item.id === product.id
                    ? {...item, count: (item.count || 1 ) + 1 }
                    : item
                );
            }
            // 若不存在，新增商品
            return[...prevCart,{...product,count:1}];
        });
    };

    // 清空購物車
    const clearCart = () =>setCart([]);

    // 計算商品總數量與總金額
    const totalCount = cart.reduce((sum,item)=> sum + item.count,0);
    const totalPrice = cart.reduce((sum,item)=> sum + item.price*item.count,0);

    return(
        <CartContext.Provider value={{ cart, addToCart, clearCart, totalCount, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

// 自訂hook，方便子組件直接呼叫
export function useCart(){
    const context = useContext(CartContext);
    if(!context){
        throw new Error('useCart 必須在CartProvider 內部使用');
    }
    return context;
}