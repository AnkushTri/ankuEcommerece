import React, { createContext, useContext, useEffect,useReducer } from 'react';
import axios from "axios";
import reducer from "../reducer/productReducer"

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppContextProvider = ({ children }) => {
    const name="Ankush's Store"
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };
    // my 2nd api call for single product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProduct,name}}>
        {children}
        </AppContext.Provider>;
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContextProvider, useAppContext };

// const  AppContext = createContext();

// export const AppContextProvider=({childeren})=>{

//     const name="Ankush Store"

//     return(
//     <AppContext.Provider  
//     value={{
//         name,
//     }}
//     > 
//     {childeren}
//     </AppContext.Provider>
//     )
// }


// export const useAppContext= () =>{
//     return useContext(AppContext);
// }

{/* <AuthContext.Provider
    value={{
        loggedIn,
        saveTokenInLocalStr,
        logoutUser,
        users,
        isLoading,
        Authorization,
    }}>
    {children}
</AuthContext.Provider> */}
// export const useAuth = () => {
//     return useContext(AuthContext);
// }
