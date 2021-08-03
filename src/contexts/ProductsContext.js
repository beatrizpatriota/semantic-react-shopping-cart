import React, { createContext, useEffect, useState } from 'react';
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        var content = []
      const runAsync = async () => {
          try{
        const stores = await fetch(`http://localhost:8080/store`, { method: 'GET' })
        .then(response => { return response.json()})
    
        for(const store of stores) {
            await fetch(`http://localhost:8080/product?storeUri=${encodeURIComponent(store.uri)}`, { method: 'GET' })
            .then(response => response.json())
            .then(res => res.forEach(data => content.push({data, store})))
            setProducts(content)
          }
        } catch(error) {
            console.log(error)
        }

      }
     runAsync()
    }, [products]);

    return (
        <ProductsContext.Provider value={{ products }} >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;