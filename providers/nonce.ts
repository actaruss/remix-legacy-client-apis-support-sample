import { createContext, useContext } from "react";
const NonceContext = createContext("");
export const useNonce = () => useContext(NonceContext);
export default NonceContext.Provider;
