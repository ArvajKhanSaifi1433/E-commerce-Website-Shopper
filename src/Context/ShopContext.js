import { createContext, useContext } from "react";

export const CreateShopContext = createContext(null);

export const ProviderShopContext = CreateShopContext.Provider;

export const useShopContext = () => useContext(CreateShopContext);
