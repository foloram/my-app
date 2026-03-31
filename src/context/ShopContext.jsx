import { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem((prev) => {
      const exist = prev.find((i) => i.id === item.id);

      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i,
        );
      }
      console.log("item added to cart", item);
      return [
        ...prev,
        {
          id: item.id,
          count: 1,
          title: item.title || item.name,
          price: item.price,
          image: item.images?.[0] || item.image,
        },
      ];
    });
  };

  const removeFromCart = (item) => {
    setCartItem((prev) =>
      prev
        .map((i) =>
          i.id === item.id
            ? {
                ...i,
                count: i.count - 1,
              }
            : i,
        )
        .filter((i) => i.count > 0),
    );
  };

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
