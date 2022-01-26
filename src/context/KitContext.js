import { createContext } from "react";

export const KitContext = createContext({
    kits:[],
    setKits: () => {}
});