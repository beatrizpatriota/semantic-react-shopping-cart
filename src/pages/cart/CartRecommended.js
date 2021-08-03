import React, { useContext, useState, useEffect } from 'react';
import RecommendedProd from '../../components/RecommendedProd';
import styles from '../store/ProductsGrid.module.scss';
import { CartContext } from '../../contexts/CartContext';

const CartRecommended = () => {
    const [recommendedProds, setRecommendedProds] = useState()
    const { email } = useContext(CartContext)

    useEffect(() => {
      const runAsync = async () => {
            const result =  await fetch(`http://localhost:8080/product/recommendation?consumerEmail=${email}`, { method: 'GET' })
            .then(response => { return response.json() })
        setRecommendedProds(result)
      }
    runAsync()
    }, [email]);

    return (
        <div className={styles.p__container}>
            <div className={styles.p__grid}>

                {(recommendedProds && recommendedProds.length > 0)? 
                recommendedProds.map(product => (
                    <RecommendedProd key={product.label} product={product} />
                )) : <p>Não há produtos recomendados ainda :(</p>
                }

            </div>
        </div>
    );
}

export default CartRecommended;