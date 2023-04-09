import React, {createContext, useState} from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);

    //combining all the values
    return (
        <ProductsContext.Provider value={{
            products, setProducts
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}
