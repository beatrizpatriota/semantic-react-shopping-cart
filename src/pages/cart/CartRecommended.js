import React, { useContext, useState, useEffect } from 'react';
import ProductItem from '../store/ProductItem';
import styles from '../store/ProductsGrid.module.scss';
import { CartContext } from '../../contexts/CartContext';

const CartRecommended = () => {
    const [recommendedProds, setRecommendedProds] = useState()
    const { email } = useContext(CartContext)

    useEffect(() => {
        let content = []
      const runAsync = async () => {
            const stores = await fetch(`http://localhost:8080/store`, { method: 'GET' })
            .then(response => response.json())

            const result =  await fetch(`http://localhost:8080/product/recommendation?consumerEmail=${email}`, { method: 'GET' })
            .then(response => { return response.json() })
            result.map(product => { 
                let storeContent = stores.find(st => st.label.toLowerCase() === product.foundIn.slice(75))
                return content.push({data: product, store: storeContent})
            })
        setRecommendedProds(content)
      }
    runAsync()
    }, [email]);

    return (
        <div className={styles.p__container}>
            <div className={styles.p__grid}>

                {recommendedProds && 
                recommendedProds.map(product => (
                    <ProductItem key={product.data.label} product={product} />
                ))
                }

            </div>
        </div>
    );
}

export default CartRecommended;