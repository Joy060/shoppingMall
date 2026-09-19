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

    // 減少商品數量 at購物車 & 數量為0則刪除
    const decreaseCart = (productId,delta)=>{
        setCart((prevCart)=>{
            return prevCart
                .map((item)=>{
                    if(item.id === productId){
                        const newCount = (item.count ||1 )+ delta;
                        return { ...item,count:newCount };
                    }
                    return item;
                })
                .filter((item)=>item.count > 0)
        });
    };
    
    // 刪除商品
    const deletefromCart = (productId) =>{
        setCart((prevCart)=>prevCart.filter((item)=> item.id !== productId));
    };


    // 清空購物車
    const clearCart = () =>setCart([]);

    // 計算商品總數量與總金額
    const totalCount = cart.reduce((sum,item)=>{ return sum + item.count},0);
    const totalPrice = cart.reduce((sum,item)=>{ return sum + item.price*item.count},0);


    return(
        <CartContext.Provider value={{ cart, addToCart, decreaseCart,clearCart, deletefromCart, totalCount, totalPrice}}>
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