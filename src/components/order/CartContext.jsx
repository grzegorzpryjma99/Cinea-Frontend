import React, {createContext, useEffect, useState}from "react";
import { useHistory } from "react-router-dom";


export const YourCartContext = createContext();


export const CartContext = (props) => {
  
    const history = useHistory();
    const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider 
      value={{cart:cart}}
      {...props}/>
  );
};

//export default AdminPanel;
