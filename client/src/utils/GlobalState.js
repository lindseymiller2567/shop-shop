import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext(); // creates a new Context object
const { Provider } = StoreContext; // every Context object comes with 2 components- provider and consumer

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };