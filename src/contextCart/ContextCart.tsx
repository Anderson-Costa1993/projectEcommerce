import { createContext, useState, ReactNode } from "react";
import { CartItemType } from "../types";

type ContextType = {
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

export const ContextCart = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const contextValue: ContextType = {
    cart,
    setCart,
  };

  return (
    <ContextCart.Provider value={contextValue}>{children}</ContextCart.Provider>
  );
};

export default ContextProvider;
