import React, { createContext, useEffect, useState } from 'react';
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        var content = []
      const runAsync = async () => {
        const stores = await fetch(`http://localhost:8080/store`, { method: 'GET' })
        .then(response => response.json())
    
        for(const store of stores) {
            await fetch(`http://localhost:8080/product?storeUri=${encodeURIComponent(store.uri)}`, { method: 'GET' })
            .then(response => response.json())
            .then(res => res.forEach(data => { content.push({data, store}) }))
          }
          setProducts(content)
      }
      if(products.length === 0) runAsync()
    }, [products]);

    return (
        <ProductsContext.Provider value={{ products }} >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;