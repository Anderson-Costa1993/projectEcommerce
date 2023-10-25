import { createContext, useState, ReactNode } from "react";
import { CartItem } from "../types";

type ContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const ContextCart = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {


  const [cart, setCart] = useState<CartItem[]>([]);

  const contextValue: ContextType = {
    cart,
    setCart,
  };

  return (
    <ContextCart.Provider value={contextValue}>{children}</ContextCart.Provider>
  );
};

export default ContextProvider;
