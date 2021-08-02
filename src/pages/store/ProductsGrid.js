import React, { useContext, useState } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {
    const [checkedByName, setCheckedByName] = useState(true)
    const { products } = useContext(ProductsContext)

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Produtos no total
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <button type="radio" className={checkedByName ? 'btn btn-outline-primary btn-sm' : 'btn btn-primary btn-sm'} 
                        checked={checkedByName} onClick={() => setCheckedByName(true)}>Por nome</button>
                        <button type="radio" className={!checkedByName ? 'btn btn-outline-primary btn-sm' : 'btn btn-primary btn-sm'} 
                        checked={!checkedByName} onClick={() => setCheckedByName(false)}>Por atividade</button>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>
                {checkedByName ?
                    products.sort(function (a, b) {
                        if (a.data.label > b.data.label) {
                            return 1;
                        } if (a.data.label < b.data.label) {
                            return -1;
                        } return 0;
                    }).map(product => (
                        <ProductItem key={product.data.label} product={product} />
                    )) :
                    products.sort(function (a, b) {
                        if (a.store.activity.label > b.store.activity.label) {
                            return 1;
                        } if (a.store.activity.label < b.store.activity.label) {
                            return -1;
                        } return 0;
                    }).map(product => (
                        <ProductItem key={product.data.label} product={product} />
                    ))}
            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
    );
}

export default ProductsGrid;