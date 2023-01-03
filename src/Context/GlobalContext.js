import { createContext } from "react";
import { useState } from "react";
export const GlobalStore = createContext();

const GlobalProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  // console.log(cartItem);
  const addTocart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const removeItem = (product) => {
    const rproduct = cartItem.filter((item) => item.id !== product.id);
    setCartItem(rproduct);
  };

  const decreaseItem = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <GlobalStore.Provider
        value={{ cartItem, addTocart, removeItem, decreaseItem }}
      >
        {props.children}
      </GlobalStore.Provider>
    </>
  );
};

export default GlobalProvider;
